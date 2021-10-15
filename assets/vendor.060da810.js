var Wv=Object.defineProperty;var Ld=Object.getOwnPropertySymbols;var $v=Object.prototype.hasOwnProperty,jv=Object.prototype.propertyIsEnumerable;var Dd=(t,e,n)=>e in t?Wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fd=(t,e)=>{for(var n in e||(e={}))$v.call(e,n)&&Dd(t,n,e[n]);if(Ld)for(var n of Ld(e))jv.call(e,n)&&Dd(t,n,e[n]);return t};function sl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Hv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=sl(Hv);function Ud(t){return!!t||t===""}function ol(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ue(i)?Kv(i):ol(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ue(t))return t;if(Me(t))return t}}const zv=/;(?![^(]*\))/g,Gv=/:(.+)/;function Kv(t){const e={};return t.split(zv).forEach(n=>{if(n){const i=n.split(Gv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function al(t){let e="";if(Ue(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=al(t[n]);i&&(e+=i+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _x=t=>t==null?"":ne(t)||Me(t)&&(t.toString===jd||!re(t.toString))?JSON.stringify(t,Vd,2):String(t),Vd=(t,e)=>e&&e.__v_isRef?Vd(t,e.value):Ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Wd(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!ne(e)&&!Hd(e)?String(e):e,Ee={},Gi=[],Vt=()=>{},Yv=()=>!1,Qv=/^on[^a-z]/,eo=t=>Qv.test(t),ll=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Bd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jv=Object.prototype.hasOwnProperty,_e=(t,e)=>Jv.call(t,e),ne=Array.isArray,Ki=t=>to(t)==="[object Map]",Wd=t=>to(t)==="[object Set]",re=t=>typeof t=="function",Ue=t=>typeof t=="string",cl=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",$d=t=>Me(t)&&re(t.then)&&re(t.catch),jd=Object.prototype.toString,to=t=>jd.call(t),Xv=t=>to(t).slice(8,-1),Hd=t=>to(t)==="[object Object]",ul=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=sl(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),io=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zv=/-(\w)/g,Qt=io(t=>t.replace(Zv,(e,n)=>n?n.toUpperCase():"")),ey=/\B([A-Z])/g,si=io(t=>t.replace(ey,"-$1").toLowerCase()),ro=io(t=>t.charAt(0).toUpperCase()+t.slice(1)),dl=io(t=>t?`on${ro(t)}`:""),Hr=(t,e)=>!Object.is(t,e),so=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},oo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qd;const ty=()=>qd||(qd=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let oi;const lo=[];class ny{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&oi&&(this.parent=oi,this.index=(oi.scopes||(oi.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(lo.push(this),oi=this)}off(){this.active&&(lo.pop(),oi=lo[lo.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function iy(t,e){e=e||oi,e&&e.active&&e.effects.push(t)}const hl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},zd=t=>(t.w&Pn)>0,Gd=t=>(t.n&Pn)>0,ry=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},sy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];zd(r)&&!Gd(r)?r.delete(t):e[n++]=r,r.w&=~Pn,r.n&=~Pn}e.length=n}},fl=new WeakMap;let qr=0,Pn=1;const pl=30,zr=[];let ai;const li=Symbol(""),gl=Symbol("");class _l{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],iy(this,i)}run(){if(!this.active)return this.fn();if(!zr.includes(this))try{return zr.push(ai=this),oy(),Pn=1<<++qr,qr<=pl?ry(this):Kd(this),this.fn()}finally{qr<=pl&&sy(this),Pn=1<<--qr,On(),zr.pop();const e=zr.length;ai=e>0?zr[e-1]:void 0}}stop(){this.active&&(Kd(this),this.onStop&&this.onStop(),this.active=!1)}}function Kd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yi=!0;const ml=[];function ci(){ml.push(Yi),Yi=!1}function oy(){ml.push(Yi),Yi=!0}function On(){const t=ml.pop();Yi=t===void 0?!0:t}function wt(t,e,n){if(!Yd())return;let i=fl.get(t);i||fl.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=hl()),Qd(r)}function Yd(){return Yi&&ai!==void 0}function Qd(t,e){let n=!1;qr<=pl?Gd(t)||(t.n|=Pn,n=!zd(t)):n=!t.has(ai),n&&(t.add(ai),ai.deps.push(t))}function gn(t,e,n,i,r,s){const o=fl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?ul(n)&&a.push(o.get("length")):(a.push(o.get(li)),Ki(t)&&a.push(o.get(gl)));break;case"delete":ne(t)||(a.push(o.get(li)),Ki(t)&&a.push(o.get(gl)));break;case"set":Ki(t)&&a.push(o.get(li));break}if(a.length===1)a[0]&&vl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);vl(hl(l))}}function vl(t,e){for(const n of ne(t)?t:[...t])(n!==ai||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ay=sl("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(cl)),ly=yl(),cy=yl(!1,!0),uy=yl(!0),Xd=dy();function dy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=pe(this);for(let s=0,o=this.length;s<o;s++)wt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ci();const i=pe(this)[e].apply(this,n);return On(),i}}),t}function yl(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_raw"&&s===(t?e?Ry:ah:e?oh:sh).get(i))return i;const o=ne(i);if(!t&&o&&_e(Xd,r))return Reflect.get(Xd,r,s);const a=Reflect.get(i,r,s);return(cl(r)?Jd.has(r):ay(r))||(t||wt(i,"get",r),e)?a:Le(a)?!o||!ul(r)?a.value:a:Me(a)?t?_o(a):xn(a):a}}const hy=Zd(),fy=Zd(!0);function Zd(t=!1){return function(n,i,r,s){let o=n[i];if(!t&&(r=pe(r),o=pe(o),!ne(n)&&Le(o)&&!Le(r)))return o.value=r,!0;const a=ne(n)&&ul(i)?Number(i)<n.length:_e(n,i),l=Reflect.set(n,i,r,s);return n===pe(s)&&(a?Hr(r,o)&&gn(n,"set",i,r):gn(n,"add",i,r)),l}}function py(t,e){const n=_e(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&gn(t,"delete",e,void 0),i}function gy(t,e){const n=Reflect.has(t,e);return(!cl(e)||!Jd.has(e))&&wt(t,"has",e),n}function _y(t){return wt(t,"iterate",ne(t)?"length":li),Reflect.ownKeys(t)}const eh={get:ly,set:hy,deleteProperty:py,has:gy,ownKeys:_y},my={get:uy,set(t,e){return!0},deleteProperty(t,e){return!0}},vy=Xe({},eh,{get:cy,set:fy}),wl=t=>t,co=t=>Reflect.getPrototypeOf(t);function uo(t,e,n=!1,i=!1){t=t.__v_raw;const r=pe(t),s=pe(e);e!==s&&!n&&wt(r,"get",e),!n&&wt(r,"get",s);const{has:o}=co(r),a=i?wl:n?Cl:Gr;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function ho(t,e=!1){const n=this.__v_raw,i=pe(n),r=pe(t);return t!==r&&!e&&wt(i,"has",t),!e&&wt(i,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function fo(t,e=!1){return t=t.__v_raw,!e&&wt(pe(t),"iterate",li),Reflect.get(t,"size",t)}function th(t){t=pe(t);const e=pe(this);return co(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function nh(t,e){e=pe(e);const n=pe(this),{has:i,get:r}=co(n);let s=i.call(n,t);s||(t=pe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Hr(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function ih(t){const e=pe(this),{has:n,get:i}=co(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gn(e,"delete",t,void 0),s}function rh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function po(t,e){return function(i,r){const s=this,o=s.__v_raw,a=pe(o),l=e?wl:t?Cl:Gr;return!t&&wt(a,"iterate",li),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function go(t,e,n){return function(...i){const r=this.__v_raw,s=pe(r),o=Ki(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?wl:e?Cl:Gr;return!e&&wt(s,"iterate",l?gl:li),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Nn(t){return function(...e){return t==="delete"?!1:this}}function yy(){const t={get(s){return uo(this,s)},get size(){return fo(this)},has:ho,add:th,set:nh,delete:ih,clear:rh,forEach:po(!1,!1)},e={get(s){return uo(this,s,!1,!0)},get size(){return fo(this)},has:ho,add:th,set:nh,delete:ih,clear:rh,forEach:po(!1,!0)},n={get(s){return uo(this,s,!0)},get size(){return fo(this,!0)},has(s){return ho.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:po(!0,!1)},i={get(s){return uo(this,s,!0,!0)},get size(){return fo(this,!0)},has(s){return ho.call(this,s,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=go(s,!1,!1),n[s]=go(s,!0,!1),e[s]=go(s,!1,!0),i[s]=go(s,!0,!0)}),[t,n,e,i]}const[wy,by,Ey,Iy]=yy();function bl(t,e){const n=e?t?Iy:Ey:t?by:wy;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(_e(n,r)&&r in i?n:i,r,s)}const Cy={get:bl(!1,!1)},Ty={get:bl(!1,!0)},Sy={get:bl(!0,!1)},sh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Ry=new WeakMap;function Ay(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Ay(Xv(t))}function xn(t){return t&&t.__v_isReadonly?t:El(t,!1,eh,Cy,sh)}function Py(t){return El(t,!1,vy,Ty,oh)}function _o(t){return El(t,!0,my,Sy,ah)}function El(t,e,n,i,r){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=ky(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Qi(t){return lh(t)?Qi(t.__v_raw):!!(t&&t.__v_isReactive)}function lh(t){return!!(t&&t.__v_isReadonly)}function ch(t){return Qi(t)||lh(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Il(t){return oo(t,"__v_skip",!0),t}const Gr=t=>Me(t)?xn(t):t,Cl=t=>Me(t)?_o(t):t;function uh(t){Yd()&&(t=pe(t),t.dep||(t.dep=hl()),Qd(t.dep))}function dh(t,e){t=pe(t),t.dep&&vl(t.dep)}function Le(t){return Boolean(t&&t.__v_isRef===!0)}function Bt(t){return hh(t,!1)}function Oy(t){return hh(t,!0)}function hh(t,e){return Le(t)?t:new Ny(t,e)}class Ny{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:Gr(e)}get value(){return uh(this),this._value}set value(e){e=this._shallow?e:pe(e),Hr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Gr(e),dh(this))}}function z(t){return Le(t)?t.value:t}const xy={get:(t,e,n)=>z(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Le(r)&&!Le(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function fh(t){return Qi(t)?t:new Proxy(t,xy)}class My{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Mn(t,e){const n=t[e];return Le(n)?n:new My(t,e)}class Ly{constructor(e,n,i){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,dh(this))}),this.__v_isReadonly=i}get value(){const e=pe(this);return uh(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ye(t,e){let n,i;const r=re(t);return r?(n=t,i=Vt):(n=t.get,i=t.set),new Ly(n,i,r||!i)}Promise.resolve();function Dy(t,e,...n){const i=t.vnode.props||Ee;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||Ee;h?r=n.map(p=>p.trim()):d&&(r=n.map(ao))}let a,l=i[a=dl(e)]||i[a=dl(Qt(e))];!l&&s&&(l=i[a=dl(si(e))]),l&&Pt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(c,t,6,r)}}function ph(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!re(t)){const l=c=>{const u=ph(c,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(ne(s)?s.forEach(l=>o[l]=null):Xe(o,s),i.set(t,o),o)}function Tl(t,e){return!t||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,si(e))||_e(t,e))}let At=null,mo=null;function vo(t){const e=At;return At=t,mo=t&&t.type.__scopeId||null,e}function mx(t){mo=t}function vx(){mo=null}function Fy(t,e=At,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Bh(-1);const s=vo(e),o=t(...r);return vo(s),i._d&&Bh(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Sl(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:_,inheritAttrs:C}=t;let w,y;const E=vo(t);try{if(n.shapeFlag&4){const R=r||i;w=tn(u.call(R,R,d,s,p,h,_)),y=l}else{const R=e;w=tn(R.length>1?R(s,{attrs:l,slots:a,emit:c}):R(s,null)),y=e.props?l:Uy(l)}}catch(R){Yr.length=0,Ao(R,t,1),w=bt(en)}let k=w;if(y&&C!==!1){const R=Object.keys(y),{shapeFlag:B}=k;R.length&&B&(1|6)&&(o&&R.some(ll)&&(y=Vy(y,o)),k=Zi(k,y))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),w=k,vo(E),w}const Uy=t=>{let e;for(const n in t)(n==="class"||n==="style"||eo(n))&&((e||(e={}))[n]=t[n]);return e},Vy=(t,e)=>{const n={};for(const i in t)(!ll(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function By(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?gh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!Tl(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gh(i,o,c):!0:!!o;return!1}function gh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Tl(n,s))return!0}return!1}function Wy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const $y=t=>t.__isSuspense;function jy(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Hw(t)}function Ji(t,e){if(je){let n=je.provides;const i=je.parent&&je.parent.provides;i===n&&(n=je.provides=Object.create(i)),n[t]=e}}function Jt(t,e,n=!1){const i=je||At;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(i.proxy):e}}function Hy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bo(()=>{t.isMounted=!0}),Kr(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],qy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},setup(t,{slots:e}){const n=Hh(),i=Hy();let r;return()=>{const s=e.default&&yh(e.default(),!0);if(!s||!s.length)return;const o=pe(t),{mode:a}=o,l=s[0];if(i.isLeaving)return Al(l);const c=vh(l);if(!c)return Al(l);const u=Rl(c,o,i,n);kl(c,u);const d=n.subTree,h=d&&vh(d);let p=!1;const{getTransitionKey:_}=c.type;if(_){const C=_();r===void 0?r=C:C!==r&&(r=C,p=!0)}if(h&&h.type!==en&&(!fi(c,h)||p)){const C=Rl(h,o,i,n);if(kl(h,C),a==="out-in")return i.isLeaving=!0,C.afterLeave=()=>{i.isLeaving=!1,n.update()},Al(l);a==="in-out"&&c.type!==en&&(C.delayLeave=(w,y,E)=>{const k=mh(i,h);k[String(h.key)]=h,w._leaveCb=()=>{y(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return l}}},_h=qy;function mh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Rl(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:C,onAppear:w,onAfterAppear:y,onAppearCancelled:E}=e,k=String(t.key),R=mh(n,t),B=(j,ee)=>{j&&Pt(j,i,9,ee)},Y={mode:s,persisted:o,beforeEnter(j){let ee=a;if(!n.isMounted)if(r)ee=C||a;else return;j._leaveCb&&j._leaveCb(!0);const $=R[k];$&&fi(t,$)&&$.el._leaveCb&&$.el._leaveCb(),B(ee,[j])},enter(j){let ee=l,$=c,ie=u;if(!n.isMounted)if(r)ee=w||l,$=y||c,ie=E||u;else return;let ce=!1;const W=j._enterCb=de=>{ce||(ce=!0,de?B(ie,[j]):B($,[j]),Y.delayedLeave&&Y.delayedLeave(),j._enterCb=void 0)};ee?(ee(j,W),ee.length<=1&&W()):W()},leave(j,ee){const $=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return ee();B(d,[j]);let ie=!1;const ce=j._leaveCb=W=>{ie||(ie=!0,ee(),W?B(_,[j]):B(p,[j]),j._leaveCb=void 0,R[$]===t&&delete R[$])};R[$]=t,h?(h(j,ce),h.length<=1&&ce()):ce()},clone(j){return Rl(j,e,n,i)}};return Y}function Al(t){if(yo(t))return t=Zi(t),t.children=null,t}function vh(t){return yo(t)?t.children?t.children[0]:void 0:t}function kl(t,e){t.shapeFlag&6&&t.component?kl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yh(t,e=!1){let n=[],i=0;for(let r=0;r<t.length;r++){const s=t[r];s.type===Zt?(s.patchFlag&128&&i++,n=n.concat(yh(s.children,e))):(e||s.type!==en)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Xi(t){return re(t)?{setup:t,name:t.name}:t}const Pl=t=>!!t.type.__asyncLoader,yo=t=>t.type.__isKeepAlive;function zy(t,e){wh(t,"a",e)}function Gy(t,e){wh(t,"da",e)}function wh(t,e,n=je){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}t()});if(wo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)yo(r.parent.vnode)&&Ky(i,e,n,r),r=r.parent}}function Ky(t,e,n,i){const r=wo(e,t,i,!0);bh(()=>{Bd(i[e],r)},n)}function wo(t,e,n=je,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ci(),er(n);const a=Pt(e,n,t,o);return pi(),On(),a});return i?r.unshift(s):r.push(s),s}}const _n=t=>(e,n=je)=>(!Ro||t==="sp")&&wo(t,e,n),Yy=_n("bm"),bo=_n("m"),Qy=_n("bu"),Jy=_n("u"),Kr=_n("bum"),bh=_n("um"),Xy=_n("sp"),Zy=_n("rtg"),ew=_n("rtc");function tw(t,e=je){wo("ec",t,e)}let Ol=!0;function nw(t){const e=Ch(t),n=t.proxy,i=t.ctx;Ol=!1,e.beforeCreate&&Eh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:_,activated:C,deactivated:w,beforeDestroy:y,beforeUnmount:E,destroyed:k,unmounted:R,render:B,renderTracked:Y,renderTriggered:j,errorCaptured:ee,serverPrefetch:$,expose:ie,inheritAttrs:ce,components:W,directives:de,filters:ke}=e;if(c&&iw(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ue=o[le];re(ue)&&(i[le]=ue.bind(n))}if(r){const le=r.call(n,n);Me(le)&&(t.data=xn(le))}if(Ol=!0,s)for(const le in s){const ue=s[le],U=re(ue)?ue.bind(n,n):re(ue.get)?ue.get.bind(n,n):Vt,ge=!re(ue)&&re(ue.set)?ue.set.bind(n):Vt,Re=ye({get:U,set:ge});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>Re.value,set:st=>Re.value=st})}if(a)for(const le in a)Ih(a[le],i,n,le);if(l){const le=re(l)?l.call(n):l;Reflect.ownKeys(le).forEach(ue=>{Ji(ue,le[ue])})}u&&Eh(u,t,"c");function he(le,ue){ne(ue)?ue.forEach(U=>le(U.bind(n))):ue&&le(ue.bind(n))}if(he(Yy,d),he(bo,h),he(Qy,p),he(Jy,_),he(zy,C),he(Gy,w),he(tw,ee),he(ew,Y),he(Zy,j),he(Kr,E),he(bh,R),he(Xy,$),ne(ie))if(ie.length){const le=t.exposed||(t.exposed={});ie.forEach(ue=>{Object.defineProperty(le,ue,{get:()=>n[ue],set:U=>n[ue]=U})})}else t.exposed||(t.exposed={});B&&t.render===Vt&&(t.render=B),ce!=null&&(t.inheritAttrs=ce),W&&(t.components=W),de&&(t.directives=de)}function iw(t,e,n=Vt,i=!1){ne(t)&&(t=Nl(t));for(const r in t){const s=t[r];let o;Me(s)?"default"in s?o=Jt(s.from||r,s.default,!0):o=Jt(s.from||r):o=Jt(s),Le(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Eh(t,e,n){Pt(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ih(t,e,n,i){const r=i.includes(".")?lf(n,i):()=>n[i];if(Ue(t)){const s=e[t];re(s)&&ht(r,s)}else if(re(t))ht(r,t.bind(n));else if(Me(t))if(ne(t))t.forEach(s=>Ih(s,e,n,i));else{const s=re(t.handler)?t.handler.bind(n):e[t.handler];re(s)&&ht(r,s,t)}}function Ch(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Eo(l,c,o,!0)),Eo(l,e,o)),s.set(e,l),l}function Eo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Eo(t,s,n,!0),r&&r.forEach(o=>Eo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=rw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rw={data:Th,props:ui,emits:ui,methods:ui,computed:ui,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ui,directives:ui,watch:ow,provide:Th,inject:sw};function Th(t,e){return e?t?function(){return Xe(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function sw(t,e){return ui(Nl(t),Nl(e))}function Nl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?Xe(Xe(Object.create(null),t),e):e}function ow(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const i in e)n[i]=ot(t[i],e[i]);return n}function aw(t,e,n,i=!1){const r={},s={};oo(s,Co,1),t.propsDefaults=Object.create(null),Sh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Py(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function lw(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=pe(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];const p=e[h];if(l)if(_e(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Qt(h);r[_]=xl(l,a,_,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Sh(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!_e(e,d)&&((u=si(d))===d||!_e(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=xl(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!_e(e,d))&&(delete s[d],c=!0)}c&&gn(t,"set","$attrs")}function Sh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(no(l))continue;const c=e[l];let u;r&&_e(r,u=Qt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Tl(t.emitsOptions,l)||c!==i[l]&&(i[l]=c,o=!0)}if(s){const l=pe(n),c=a||Ee;for(let u=0;u<s.length;u++){const d=s[u];n[d]=xl(r,l,d,c[d],t,!_e(c,d))}}return o}function xl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&re(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(er(r),i=c[n]=l.call(null,e),pi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===si(n))&&(i=!0))}return i}function Rh(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!re(t)){const u=d=>{l=!0;const[h,p]=Rh(d,e,!0);Xe(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,Gi),Gi;if(ne(s))for(let u=0;u<s.length;u++){const d=Qt(s[u]);Ah(d)&&(o[d]=Ee)}else if(s)for(const u in s){const d=Qt(u);if(Ah(d)){const h=s[u],p=o[d]=ne(h)||re(h)?{type:h}:h;if(p){const _=Oh(Boolean,p.type),C=Oh(String,p.type);p[0]=_>-1,p[1]=C<0||_<C,(_>-1||_e(p,"default"))&&a.push(d)}}}const c=[o,a];return i.set(t,c),c}function Ah(t){return t[0]!=="$"}function kh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ph(t,e){return kh(t)===kh(e)}function Oh(t,e){return ne(e)?e.findIndex(n=>Ph(n,t)):re(e)&&Ph(e,t)?0:-1}const Nh=t=>t[0]==="_"||t==="$stable",Ml=t=>ne(t)?t.map(tn):[tn(t)],cw=(t,e,n)=>{const i=Fy((...r)=>Ml(e(...r)),n);return i._c=!1,i},xh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Nh(r))continue;const s=t[r];if(re(s))e[r]=cw(r,s,i);else if(s!=null){const o=Ml(s);e[r]=()=>o}}},Mh=(t,e)=>{const n=Ml(e);t.slots.default=()=>n},uw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),oo(e,"_",n)):xh(e,t.slots={})}else t.slots={},e&&Mh(t,e);oo(t.slots,Co,1)},dw=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Ee;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Xe(r,e),!n&&a===1&&delete r._):(s=!e.$stable,xh(e,r)),o=e}else e&&(Mh(t,e),o={default:1});if(s)for(const a in r)!Nh(a)&&!(a in o)&&delete r[a]};function yx(t,e){const n=At;if(n===null)return t;const i=n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Ee]=e[s];re(o)&&(o={mounted:o,updated:o}),o.deep&&gi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function di(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ci(),Pt(l,n,8,[t.el,a,t,e]),On())}}function Lh(){return{app:null,config:{isNativeTag:Yv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hw=0;function fw(t,e){return function(i,r=null){r!=null&&!Me(r)&&(r=null);const s=Lh(),o=new Set;let a=!1;const l=s.app={_uid:hw++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zw,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&re(c.install)?(o.add(c),c.install(l,...u)):re(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=bt(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,jl(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}const at=jy;function pw(t){return gw(t)}function gw(t,e){const n=ty();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Vt,cloneNode:_,insertStaticContent:C}=t,w=(f,g,m,b=null,T=null,x=null,V=!1,P=null,M=!!g.dynamicChildren)=>{if(f===g)return;f&&!fi(f,g)&&(b=G(f),Fe(f,T,x,!0),f=null),g.patchFlag===-2&&(M=!1,g.dynamicChildren=null);const{type:A,ref:Q,shapeFlag:q}=g;switch(A){case Ul:y(f,g,m,b);break;case en:E(f,g,m,b);break;case Vl:f==null&&k(g,m,b,V);break;case Zt:de(f,g,m,b,T,x,V,P,M);break;default:q&1?Y(f,g,m,b,T,x,V,P,M):q&6?ke(f,g,m,b,T,x,V,P,M):(q&64||q&128)&&A.process(f,g,m,b,T,x,V,P,M,S)}Q!=null&&T&&Ll(Q,f&&f.ref,x,g||f,!g)},y=(f,g,m,b)=>{if(f==null)i(g.el=a(g.children),m,b);else{const T=g.el=f.el;g.children!==f.children&&c(T,g.children)}},E=(f,g,m,b)=>{f==null?i(g.el=l(g.children||""),m,b):g.el=f.el},k=(f,g,m,b)=>{[f.el,f.anchor]=C(f.children,g,m,b)},R=({el:f,anchor:g},m,b)=>{let T;for(;f&&f!==g;)T=h(f),i(f,m,b),f=T;i(g,m,b)},B=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=h(f),r(f),f=m;r(g)},Y=(f,g,m,b,T,x,V,P,M)=>{V=V||g.type==="svg",f==null?j(g,m,b,T,x,V,P,M):ie(f,g,T,x,V,P,M)},j=(f,g,m,b,T,x,V,P)=>{let M,A;const{type:Q,props:q,shapeFlag:J,transition:te,patchFlag:fe,dirs:Pe}=f;if(f.el&&_!==void 0&&fe===-1)M=f.el=_(f.el);else{if(M=f.el=o(f.type,x,q&&q.is,q),J&8?u(M,f.children):J&16&&$(f.children,M,null,b,T,x&&Q!=="foreignObject",V,P),Pe&&di(f,null,b,"created"),q){for(const Ae in q)Ae!=="value"&&!no(Ae)&&s(M,Ae,null,q[Ae],x,f.children,b,T,D);"value"in q&&s(M,"value",null,q.value),(A=q.onVnodeBeforeMount)&&Xt(A,b,f)}ee(M,f,f.scopeId,V,b)}Pe&&di(f,null,b,"beforeMount");const be=(!T||T&&!T.pendingBranch)&&te&&!te.persisted;be&&te.beforeEnter(M),i(M,g,m),((A=q&&q.onVnodeMounted)||be||Pe)&&at(()=>{A&&Xt(A,b,f),be&&te.enter(M),Pe&&di(f,null,b,"mounted")},T)},ee=(f,g,m,b,T)=>{if(m&&p(f,m),b)for(let x=0;x<b.length;x++)p(f,b[x]);if(T){let x=T.subTree;if(g===x){const V=T.vnode;ee(f,V,V.scopeId,V.slotScopeIds,T.parent)}}},$=(f,g,m,b,T,x,V,P,M=0)=>{for(let A=M;A<f.length;A++){const Q=f[A]=P?Ln(f[A]):tn(f[A]);w(null,Q,g,m,b,T,x,V,P)}},ie=(f,g,m,b,T,x,V)=>{const P=g.el=f.el;let{patchFlag:M,dynamicChildren:A,dirs:Q}=g;M|=f.patchFlag&16;const q=f.props||Ee,J=g.props||Ee;let te;(te=J.onVnodeBeforeUpdate)&&Xt(te,m,g,f),Q&&di(g,f,m,"beforeUpdate");const fe=T&&g.type!=="foreignObject";if(A?ce(f.dynamicChildren,A,P,m,b,fe,x):V||U(f,g,P,null,m,b,fe,x,!1),M>0){if(M&16)W(P,g,q,J,m,b,T);else if(M&2&&q.class!==J.class&&s(P,"class",null,J.class,T),M&4&&s(P,"style",q.style,J.style,T),M&8){const Pe=g.dynamicProps;for(let be=0;be<Pe.length;be++){const Ae=Pe[be],Ut=q[Ae],zi=J[Ae];(zi!==Ut||Ae==="value")&&s(P,Ae,Ut,zi,T,f.children,m,b,D)}}M&1&&f.children!==g.children&&u(P,g.children)}else!V&&A==null&&W(P,g,q,J,m,b,T);((te=J.onVnodeUpdated)||Q)&&at(()=>{te&&Xt(te,m,g,f),Q&&di(g,f,m,"updated")},b)},ce=(f,g,m,b,T,x,V)=>{for(let P=0;P<g.length;P++){const M=f[P],A=g[P],Q=M.el&&(M.type===Zt||!fi(M,A)||M.shapeFlag&(6|64))?d(M.el):m;w(M,A,Q,null,b,T,x,V,!0)}},W=(f,g,m,b,T,x,V)=>{if(m!==b){for(const P in b){if(no(P))continue;const M=b[P],A=m[P];M!==A&&P!=="value"&&s(f,P,A,M,V,g.children,T,x,D)}if(m!==Ee)for(const P in m)!no(P)&&!(P in b)&&s(f,P,m[P],null,V,g.children,T,x,D);"value"in b&&s(f,"value",m.value,b.value)}},de=(f,g,m,b,T,x,V,P,M)=>{const A=g.el=f?f.el:a(""),Q=g.anchor=f?f.anchor:a("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:te}=g;te&&(P=P?P.concat(te):te),f==null?(i(A,m,b),i(Q,m,b),$(g.children,m,Q,T,x,V,P,M)):q>0&&q&64&&J&&f.dynamicChildren?(ce(f.dynamicChildren,J,m,T,x,V,P),(g.key!=null||T&&g===T.subTree)&&Dh(f,g,!0)):U(f,g,m,Q,T,x,V,P,M)},ke=(f,g,m,b,T,x,V,P,M)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?T.ctx.activate(g,m,b,V,M):nt(g,m,b,T,x,V,M):he(f,g,M)},nt=(f,g,m,b,T,x,V)=>{const P=f.component=Aw(f,b,T);if(yo(f)&&(P.ctx.renderer=S),kw(P),P.asyncDep){if(T&&T.registerDep(P,le),!f.el){const M=P.subTree=bt(en);E(null,M,g,m)}return}le(P,f,g,m,T,x,V)},he=(f,g,m)=>{const b=g.component=f.component;if(By(f,g,m))if(b.asyncDep&&!b.asyncResolved){ue(b,g,m);return}else b.next=g,$w(b.update),b.update();else g.component=f.component,g.el=f.el,b.vnode=g},le=(f,g,m,b,T,x,V)=>{const P=()=>{if(f.isMounted){let{next:Q,bu:q,u:J,parent:te,vnode:fe}=f,Pe=Q,be;M.allowRecurse=!1,Q?(Q.el=fe.el,ue(f,Q,V)):Q=fe,q&&so(q),(be=Q.props&&Q.props.onVnodeBeforeUpdate)&&Xt(be,te,Q,fe),M.allowRecurse=!0;const Ae=Sl(f),Ut=f.subTree;f.subTree=Ae,w(Ut,Ae,d(Ut.el),G(Ut),f,T,x),Q.el=Ae.el,Pe===null&&Wy(f,Ae.el),J&&at(J,T),(be=Q.props&&Q.props.onVnodeUpdated)&&at(()=>Xt(be,te,Q,fe),T)}else{let Q;const{el:q,props:J}=g,{bm:te,m:fe,parent:Pe}=f,be=Pl(g);if(M.allowRecurse=!1,te&&so(te),!be&&(Q=J&&J.onVnodeBeforeMount)&&Xt(Q,Pe,g),M.allowRecurse=!0,q&&L){const Ae=()=>{f.subTree=Sl(f),L(q,f.subTree,f,T,null)};be?g.type.__asyncLoader().then(()=>!f.isUnmounted&&Ae()):Ae()}else{const Ae=f.subTree=Sl(f);w(null,Ae,m,b,f,T,x),g.el=Ae.el}if(fe&&at(fe,T),!be&&(Q=J&&J.onVnodeMounted)){const Ae=g;at(()=>Xt(Q,Pe,Ae),T)}g.shapeFlag&256&&f.a&&at(f.a,T),f.isMounted=!0,g=m=b=null}},M=new _l(P,()=>ef(f.update),f.scope),A=f.update=M.run.bind(M);A.id=f.uid,M.allowRecurse=A.allowRecurse=!0,A()},ue=(f,g,m)=>{g.component=f;const b=f.vnode.props;f.vnode=g,f.next=null,lw(f,g.props,b,m),dw(f,g.children,m),ci(),Gl(void 0,f.update),On()},U=(f,g,m,b,T,x,V,P,M=!1)=>{const A=f&&f.children,Q=f?f.shapeFlag:0,q=g.children,{patchFlag:J,shapeFlag:te}=g;if(J>0){if(J&128){Re(A,q,m,b,T,x,V,P,M);return}else if(J&256){ge(A,q,m,b,T,x,V,P,M);return}}te&8?(Q&16&&D(A,T,x),q!==A&&u(m,q)):Q&16?te&16?Re(A,q,m,b,T,x,V,P,M):D(A,T,x,!0):(Q&8&&u(m,""),te&16&&$(q,m,b,T,x,V,P,M))},ge=(f,g,m,b,T,x,V,P,M)=>{f=f||Gi,g=g||Gi;const A=f.length,Q=g.length,q=Math.min(A,Q);let J;for(J=0;J<q;J++){const te=g[J]=M?Ln(g[J]):tn(g[J]);w(f[J],te,m,null,T,x,V,P,M)}A>Q?D(f,T,x,!0,!1,q):$(g,m,b,T,x,V,P,M,q)},Re=(f,g,m,b,T,x,V,P,M)=>{let A=0;const Q=g.length;let q=f.length-1,J=Q-1;for(;A<=q&&A<=J;){const te=f[A],fe=g[A]=M?Ln(g[A]):tn(g[A]);if(fi(te,fe))w(te,fe,m,null,T,x,V,P,M);else break;A++}for(;A<=q&&A<=J;){const te=f[q],fe=g[J]=M?Ln(g[J]):tn(g[J]);if(fi(te,fe))w(te,fe,m,null,T,x,V,P,M);else break;q--,J--}if(A>q){if(A<=J){const te=J+1,fe=te<Q?g[te].el:b;for(;A<=J;)w(null,g[A]=M?Ln(g[A]):tn(g[A]),m,fe,T,x,V,P,M),A++}}else if(A>J)for(;A<=q;)Fe(f[A],T,x,!0),A++;else{const te=A,fe=A,Pe=new Map;for(A=fe;A<=J;A++){const yt=g[A]=M?Ln(g[A]):tn(g[A]);yt.key!=null&&Pe.set(yt.key,A)}let be,Ae=0;const Ut=J-fe+1;let zi=!1,Nd=0;const jr=new Array(Ut);for(A=0;A<Ut;A++)jr[A]=0;for(A=te;A<=q;A++){const yt=f[A];if(Ae>=Ut){Fe(yt,T,x,!0);continue}let Yt;if(yt.key!=null)Yt=Pe.get(yt.key);else for(be=fe;be<=J;be++)if(jr[be-fe]===0&&fi(yt,g[be])){Yt=be;break}Yt===void 0?Fe(yt,T,x,!0):(jr[Yt-fe]=A+1,Yt>=Nd?Nd=Yt:zi=!0,w(yt,g[Yt],m,null,T,x,V,P,M),Ae++)}const xd=zi?_w(jr):Gi;for(be=xd.length-1,A=Ut-1;A>=0;A--){const yt=fe+A,Yt=g[yt],Md=yt+1<Q?g[yt+1].el:b;jr[A]===0?w(null,Yt,m,Md,T,x,V,P,M):zi&&(be<0||A!==xd[be]?st(Yt,m,Md,2):be--)}}},st=(f,g,m,b,T=null)=>{const{el:x,type:V,transition:P,children:M,shapeFlag:A}=f;if(A&6){st(f.component.subTree,g,m,b);return}if(A&128){f.suspense.move(g,m,b);return}if(A&64){V.move(f,g,m,S);return}if(V===Zt){i(x,g,m);for(let q=0;q<M.length;q++)st(M[q],g,m,b);i(f.anchor,g,m);return}if(V===Vl){R(f,g,m);return}if(b!==2&&A&1&&P)if(b===0)P.beforeEnter(x),i(x,g,m),at(()=>P.enter(x),T);else{const{leave:q,delayLeave:J,afterLeave:te}=P,fe=()=>i(x,g,m),Pe=()=>{q(x,()=>{fe(),te&&te()})};J?J(x,fe,Pe):Pe()}else i(x,g,m)},Fe=(f,g,m,b=!1,T=!1)=>{const{type:x,props:V,ref:P,children:M,dynamicChildren:A,shapeFlag:Q,patchFlag:q,dirs:J}=f;if(P!=null&&Ll(P,null,m,f,!0),Q&256){g.ctx.deactivate(f);return}const te=Q&1&&J,fe=!Pl(f);let Pe;if(fe&&(Pe=V&&V.onVnodeBeforeUnmount)&&Xt(Pe,g,f),Q&6)H(f.component,m,b);else{if(Q&128){f.suspense.unmount(m,b);return}te&&di(f,null,g,"beforeUnmount"),Q&64?f.type.remove(f,g,m,T,S,b):A&&(x!==Zt||q>0&&q&64)?D(A,g,m,!1,!0):(x===Zt&&q&(128|256)||!T&&Q&16)&&D(M,g,m),b&&pn(f)}(fe&&(Pe=V&&V.onVnodeUnmounted)||te)&&at(()=>{Pe&&Xt(Pe,g,f),te&&di(f,null,g,"unmounted")},m)},pn=f=>{const{type:g,el:m,anchor:b,transition:T}=f;if(g===Zt){I(m,b);return}if(g===Vl){B(f);return}const x=()=>{r(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:P}=T,M=()=>V(m,x);P?P(f.el,x,M):M()}else x()},I=(f,g)=>{let m;for(;f!==g;)m=h(f),r(f),f=m;r(g)},H=(f,g,m)=>{const{bum:b,scope:T,update:x,subTree:V,um:P}=f;b&&so(b),T.stop(),x&&(x.active=!1,Fe(V,f,g,m)),P&&at(P,g),at(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},D=(f,g,m,b=!1,T=!1,x=0)=>{for(let V=x;V<f.length;V++)Fe(f[V],g,m,b,T)},G=f=>f.shapeFlag&6?G(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),v=(f,g,m)=>{f==null?g._vnode&&Fe(g._vnode,null,null,!0):w(g._vnode||null,f,g,null,null,null,m),rf(),g._vnode=f},S={p:w,um:Fe,m:st,r:pn,mt:nt,mc:$,pc:U,pbc:ce,n:G,o:t};let F,L;return e&&([F,L]=e(S)),{render:v,hydrate:F,createApp:fw(v,F)}}function Ll(t,e,n,i,r=!1){if(ne(t)){t.forEach((h,p)=>Ll(h,e&&(ne(e)?e[p]:e),n,i,r));return}if(Pl(i)&&!r)return;const s=i.shapeFlag&4?jl(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ee?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ue(c)?(u[c]=null,_e(d,c)&&(d[c]=null)):Le(c)&&(c.value=null)),Ue(l)){const h=()=>{u[l]=o,_e(d,l)&&(d[l]=o)};o?(h.id=-1,at(h,n)):h()}else if(Le(l)){const h=()=>{l.value=o};o?(h.id=-1,at(h,n)):h()}else re(l)&&mn(l,a,12,[o,u])}function Xt(t,e,n,i=null){Pt(t,e,7,[n,i])}function Dh(t,e,n=!1){const i=t.children,r=e.children;if(ne(i)&&ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ln(r[s]),a.el=o.el),n||Dh(o,a))}}function _w(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const mw=t=>t.__isTeleport,Dl="components";function wx(t,e){return Uh(Dl,t,!0,e)||t}const Fh=Symbol();function Fl(t){return Ue(t)?Uh(Dl,t,!1)||t:t||Fh}function Uh(t,e,n=!0,i=!1){const r=At||je;if(r){const s=r.type;if(t===Dl){const a=Yh(s);if(a&&(a===e||a===Qt(e)||a===ro(Qt(e))))return s}const o=Vh(r[t]||s[t],e)||Vh(r.appContext[t],e);return!o&&i?s:o}}function Vh(t,e){return t&&(t[e]||t[Qt(e)]||t[ro(Qt(e))])}const Zt=Symbol(void 0),Ul=Symbol(void 0),en=Symbol(void 0),Vl=Symbol(void 0),Yr=[];let hi=null;function vw(t=!1){Yr.push(hi=t?null:[])}function yw(){Yr.pop(),hi=Yr[Yr.length-1]||null}let Io=1;function Bh(t){Io+=t}function Wh(t){return t.dynamicChildren=Io>0?hi||Gi:null,yw(),Io>0&&hi&&hi.push(t),t}function bx(t,e,n,i,r,s){return Wh(jh(t,e,n,i,r,s,!0))}function ww(t,e,n,i,r){return Wh(bt(t,e,n,i,r,!0))}function Bl(t){return t?t.__v_isVNode===!0:!1}function fi(t,e){return t.type===e.type&&t.key===e.key}const Co="__vInternal",$h=({key:t})=>t!=null?t:null,To=({ref:t})=>t!=null?Ue(t)||Le(t)||re(t)?{i:At,r:t}:t:null;function jh(t,e=null,n=null,i=0,r=null,s=t===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$h(e),ref:e&&To(e),scopeId:mo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Wl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),Io>0&&!o&&hi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hi.push(l),l}const bt=bw;function bw(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Fh)&&(t=en),Bl(t)){const a=Zi(t,e,!0);return n&&Wl(a,n),a}if(Lw(t)&&(t=t.__vccOpts),e){e=Ew(e);let{class:a,style:l}=e;a&&!Ue(a)&&(e.class=al(a)),Me(l)&&(ch(l)&&!ne(l)&&(l=Xe({},l)),e.style=ol(l))}const o=Ue(t)?1:$y(t)?128:mw(t)?64:Me(t)?4:re(t)?2:0;return jh(t,e,n,i,r,o,s,!0)}function Ew(t){return t?ch(t)||Co in t?Xe({},t):t:null}function Zi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Cw(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&$h(a),ref:e&&e.ref?n&&r?ne(r)?r.concat(To(e)):[r,To(e)]:To(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Zt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zi(t.ssContent),ssFallback:t.ssFallback&&Zi(t.ssFallback),el:t.el,anchor:t.anchor}}function Iw(t=" ",e=0){return bt(Ul,null,t,e)}function Ex(t="",e=!1){return e?(vw(),ww(en,null,t)):bt(en,null,t)}function tn(t){return t==null||typeof t=="boolean"?bt(en):ne(t)?bt(Zt,null,t.slice()):typeof t=="object"?Ln(t):bt(Ul,null,String(t))}function Ln(t){return t.el===null||t.memo?t:Zi(t)}function Wl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),Wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Co in e)?e._ctx=At:r===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:At},n=32):(e=String(e),i&64?(n=16,e=[Iw(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cw(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=al([e.class,i.class]));else if(r==="style")e.style=ol([e.style,i.style]);else if(eo(r)){const s=e[r],o=i[r];s!==o&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Ix(t,e,n,i){let r;const s=n&&n[i];if(ne(t)||Ue(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const $l=t=>t?qh(t)?jl(t)||t.proxy:$l(t.parent):null,So=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$l(t.parent),$root:t=>$l(t.root),$emit:t=>t.emit,$options:t=>Ch(t),$forceUpdate:t=>()=>ef(t.update),$nextTick:t=>ir.bind(t.proxy),$watch:t=>qw.bind(t)}),Tw={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 0:return i[e];case 1:return r[e];case 3:return n[e];case 2:return s[e]}else{if(i!==Ee&&_e(i,e))return o[e]=0,i[e];if(r!==Ee&&_e(r,e))return o[e]=1,r[e];if((c=t.propsOptions[0])&&_e(c,e))return o[e]=2,s[e];if(n!==Ee&&_e(n,e))return o[e]=3,n[e];Ol&&(o[e]=4)}}const u=So[e];let d,h;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ee&&_e(n,e))return o[e]=3,n[e];if(h=l.config.globalProperties,_e(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;if(r!==Ee&&_e(r,e))r[e]=n;else if(i!==Ee&&_e(i,e))i[e]=n;else if(_e(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return n[o]!==void 0||t!==Ee&&_e(t,o)||e!==Ee&&_e(e,o)||(a=s[0])&&_e(a,o)||_e(i,o)||_e(So,o)||_e(r.config.globalProperties,o)}},Sw=Lh();let Rw=0;function Aw(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Sw,s={uid:Rw++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,update:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rh(i,r),emitsOptions:ph(i,r),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:i.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dy.bind(null,s),t.ce&&t.ce(s),s}let je=null;const Hh=()=>je||At,er=t=>{je=t,t.scope.on()},pi=()=>{je&&je.scope.off(),je=null};function qh(t){return t.vnode.shapeFlag&4}let Ro=!1;function kw(t,e=!1){Ro=e;const{props:n,children:i}=t.vnode,r=qh(t);aw(t,n,r,e),uw(t,i);const s=r?Pw(t,e):void 0;return Ro=!1,s}function Pw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Il(new Proxy(t.ctx,Tw));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Nw(t):null;er(t),ci();const s=mn(i,t,0,[t.props,r]);if(On(),pi(),$d(s)){if(s.then(pi,pi),e)return s.then(o=>{zh(t,o,e)}).catch(o=>{Ao(o,t,0)});t.asyncDep=s}else zh(t,s,e)}else Kh(t,e)}function zh(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=fh(e)),Kh(t,n)}let Gh;function Kh(t,e,n){const i=t.type;if(!t.render){if(!e&&Gh&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Xe(Xe({isCustomElement:s,delimiters:a},o),l);i.render=Gh(r,c)}}t.render=i.render||Vt}er(t),ci(),nw(t),On(),pi()}function Ow(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function Nw(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Ow(t))},slots:t.slots,emit:t.emit,expose:e}}function jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fh(Il(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in So)return So[n](t)}}))}const xw=/(?:^|[-_])(\w)/g,Mw=t=>t.replace(xw,e=>e.toUpperCase()).replace(/[-_]/g,"");function Yh(t){return re(t)&&t.displayName||t.name}function Qh(t,e,n=!1){let i=Yh(e);if(!i&&e.__file){const r=e.__file.match(/([^/\\]+)\.\w+$/);r&&(i=r[1])}if(!i&&t&&t.parent){const r=s=>{for(const o in s)if(s[o]===e)return o};i=r(t.components||t.parent.type.components)||r(t.appContext.components)}return i?Mw(i):n?"App":"Anonymous"}function Lw(t){return re(t)&&"__vccOpts"in t}const Qr=[];function Jh(t,...e){ci();const n=Qr.length?Qr[Qr.length-1].component:null,i=n&&n.appContext.config.warnHandler,r=Dw();if(i)mn(i,n,11,[t+e.join(""),n&&n.proxy,r.map(({vnode:s})=>`at <${Qh(n,s.type)}>`).join(`
`),r]);else{const s=[`[Vue warn]: ${t}`,...e];r.length&&s.push(`
`,...Fw(r)),console.warn(...s)}On()}function Dw(){let t=Qr[Qr.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function Fw(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...Uw(n))}),e}function Uw({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,r=` at <${Qh(t.component,t.type,i)}`,s=">"+n;return t.props?[r,...Vw(t.props),s]:[r+s]}function Vw(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...Xh(i,t[i]))}),n.length>3&&e.push(" ..."),e}function Xh(t,e,n){return Ue(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Le(e)?(e=Xh(t,pe(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):re(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=pe(e),n?e:[`${t}=`,e])}function mn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Ao(s,e,n)}return r}function Pt(t,e,n,i){if(re(t)){const s=mn(t,e,n,i);return s&&$d(s)&&s.catch(o=>{Ao(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(Pt(t[s],e,n,i));return r}function Ao(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){mn(l,null,10,[t,o,a]);return}}Bw(t,n,r,i)}function Bw(t,e,n,i=!0){console.error(t)}let ko=!1,Hl=!1;const Et=[];let vn=0;const Jr=[];let Xr=null,tr=0;const Zr=[];let Dn=null,nr=0;const Zh=Promise.resolve();let ql=null,zl=null;function ir(t){const e=ql||Zh;return t?e.then(this?t.bind(this):t):e}function Ww(t){let e=vn+1,n=Et.length;for(;e<n;){const i=e+n>>>1;es(Et[i])<t?e=i+1:n=i}return e}function ef(t){(!Et.length||!Et.includes(t,ko&&t.allowRecurse?vn+1:vn))&&t!==zl&&(t.id==null?Et.push(t):Et.splice(Ww(t.id),0,t),tf())}function tf(){!ko&&!Hl&&(Hl=!0,ql=Zh.then(sf))}function $w(t){const e=Et.indexOf(t);e>vn&&Et.splice(e,1)}function nf(t,e,n,i){ne(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),tf()}function jw(t){nf(t,Xr,Jr,tr)}function Hw(t){nf(t,Dn,Zr,nr)}function Gl(t,e=null){if(Jr.length){for(zl=e,Xr=[...new Set(Jr)],Jr.length=0,tr=0;tr<Xr.length;tr++)Xr[tr]();Xr=null,tr=0,zl=null,Gl(t,e)}}function rf(t){if(Zr.length){const e=[...new Set(Zr)];if(Zr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((n,i)=>es(n)-es(i)),nr=0;nr<Dn.length;nr++)Dn[nr]();Dn=null,nr=0}}const es=t=>t.id==null?1/0:t.id;function sf(t){Hl=!1,ko=!0,Gl(t),Et.sort((n,i)=>es(n)-es(i));const e=Vt;try{for(vn=0;vn<Et.length;vn++){const n=Et[vn];n&&n.active!==!1&&mn(n,null,14)}}finally{vn=0,Et.length=0,rf(),ko=!1,ql=null,(Et.length||Jr.length||Zr.length)&&sf(t)}}const of={};function ht(t,e,n){return af(t,e,n)}function af(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Ee){const a=je;let l,c=!1,u=!1;if(Le(t)?(l=()=>t.value,c=!!t._shallow):Qi(t)?(l=()=>t,i=!0):ne(t)?(u=!0,c=t.some(Qi),l=()=>t.map(y=>{if(Le(y))return y.value;if(Qi(y))return gi(y);if(re(y))return mn(y,a,2)})):re(t)?e?l=()=>mn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Pt(t,a,3,[h])}:l=Vt,e&&i){const y=l;l=()=>gi(y())}let d,h=y=>{d=w.onStop=()=>{mn(y,a,4)}};if(Ro)return h=Vt,e?n&&Pt(e,a,3,[l(),u?[]:void 0,h]):l(),Vt;let p=u?[]:of;const _=()=>{if(!!w.active)if(e){const y=w.run();(i||c||(u?y.some((E,k)=>Hr(E,p[k])):Hr(y,p)))&&(d&&d(),Pt(e,a,3,[y,p===of?void 0:p,h]),p=y)}else w.run()};_.allowRecurse=!!e;let C;r==="sync"?C=_:r==="post"?C=()=>at(_,a&&a.suspense):C=()=>{!a||a.isMounted?jw(_):_()};const w=new _l(l,C);return e?n?_():p=w.run():r==="post"?at(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&Bd(a.scope.effects,w)}}function qw(t,e,n){const i=this.proxy,r=Ue(t)?t.includes(".")?lf(i,t):()=>i[t]:t.bind(i,i);let s;re(e)?s=e:(s=e.handler,n=e);const o=je;er(this);const a=af(r,s.bind(i),n);return o?er(o):pi(),a}function lf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function gi(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))gi(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)gi(t[n],e);else if(Wd(t)||Ki(t))t.forEach(n=>{gi(n,e)});else if(Hd(t))for(const n in t)gi(t[n],e);return t}function _i(t,e,n){const i=arguments.length;return i===2?Me(e)&&!ne(e)?Bl(e)?bt(t,null,[e]):bt(t,e):bt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Bl(n)&&(n=[n]),bt(t,e,n))}const zw="3.2.19",Gw="http://www.w3.org/2000/svg",rr=typeof document!="undefined"?document:null,cf=new Map,Kw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?rr.createElementNS(Gw,t):rr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i){const r=n?n.previousSibling:e.lastChild;let s=cf.get(t);if(!s){const o=rr.createElement("template");if(o.innerHTML=i?`<svg>${t}</svg>`:t,s=o.content,i){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}cf.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Yw(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Qw(t,e,n){const i=t.style,r=i.display;if(!n)t.removeAttribute("style");else if(Ue(n))e!==n&&(i.cssText=n);else{for(const s in n)Kl(i,s,n[s]);if(e&&!Ue(e))for(const s in e)n[s]==null&&Kl(i,s,"")}"_vod"in t&&(i.display=r)}const uf=/\s*!important$/;function Kl(t,e,n){if(ne(n))n.forEach(i=>Kl(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Jw(t,e);uf.test(n)?t.setProperty(si(i),n.replace(uf,""),"important"):t[i]=n}}const df=["Webkit","Moz","ms"],Yl={};function Jw(t,e){const n=Yl[e];if(n)return n;let i=Qt(e);if(i!=="filter"&&i in t)return Yl[e]=i;i=ro(i);for(let r=0;r<df.length;r++){const s=df[r]+i;if(s in t)return Yl[e]=s}return e}const hf="http://www.w3.org/1999/xlink";function Xw(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hf,e.slice(6,e.length)):t.setAttributeNS(hf,e,n);else{const s=qv(e);n==null||s&&!Ud(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Zw(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ud(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(l){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let Po=Date.now,ff=!1;if(typeof window!="undefined"){Po()>document.createEvent("Event").timeStamp&&(Po=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ff=!!(t&&Number(t[1])<=53)}let Ql=0;const eb=Promise.resolve(),tb=()=>{Ql=0},nb=()=>Ql||(eb.then(tb),Ql=Po());function sr(t,e,n,i){t.addEventListener(e,n,i)}function ib(t,e,n,i){t.removeEventListener(e,n,i)}function rb(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=sb(e);if(i){const c=s[e]=ob(i,r);sr(t,a,c,l)}else o&&(ib(t,a,o,l),s[e]=void 0)}}const pf=/(?:Once|Passive|Capture)$/;function sb(t){let e;if(pf.test(t)){e={};let n;for(;n=t.match(pf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[si(t.slice(2)),e]}function ob(t,e){const n=i=>{const r=i.timeStamp||Po();(ff||r>=n.attached-1)&&Pt(ab(i,n.value),e,5,[i])};return n.value=t,n.attached=nb(),n}function ab(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i(r))}else return e}const gf=/^on[a-z]/,lb=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?Yw(t,i,r):e==="style"?Qw(t,n,i):eo(e)?ll(e)||rb(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cb(t,e,i,r))?Zw(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Xw(t,e,i,r))};function cb(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&gf.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gf.test(e)&&Ue(n)?!1:e in t}const Fn="transition",ts="animation",_f=(t,{slots:e})=>_i(_h,ub(t),e);_f.displayName="Transition";const mf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_f.props=Xe({},_h.props,mf);const mi=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},vf=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function ub(t){const e={};for(const W in t)W in mf||(e[W]=t[W]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=db(r),C=_&&_[0],w=_&&_[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:k,onLeave:R,onLeaveCancelled:B,onBeforeAppear:Y=y,onAppear:j=E,onAppearCancelled:ee=k}=e,$=(W,de,ke)=>{or(W,de?u:a),or(W,de?c:o),ke&&ke()},ie=(W,de)=>{or(W,p),or(W,h),de&&de()},ce=W=>(de,ke)=>{const nt=W?j:E,he=()=>$(de,W,ke);mi(nt,[de,he]),yf(()=>{or(de,W?l:s),Un(de,W?u:a),vf(nt)||wf(de,i,C,he)})};return Xe(e,{onBeforeEnter(W){mi(y,[W]),Un(W,s),Un(W,o)},onBeforeAppear(W){mi(Y,[W]),Un(W,l),Un(W,c)},onEnter:ce(!1),onAppear:ce(!0),onLeave(W,de){const ke=()=>ie(W,de);Un(W,d),pb(),Un(W,h),yf(()=>{or(W,d),Un(W,p),vf(R)||wf(W,i,w,ke)}),mi(R,[W,ke])},onEnterCancelled(W){$(W,!1),mi(k,[W])},onAppearCancelled(W){$(W,!0),mi(ee,[W])},onLeaveCancelled(W){ie(W),mi(B,[W])}})}function db(t){if(t==null)return null;if(Me(t))return[Jl(t.enter),Jl(t.leave)];{const e=Jl(t);return[e,e]}}function Jl(t){return ao(t)}function Un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function or(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function yf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hb=0;function wf(t,e,n,i){const r=t._endId=++hb,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=fb(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function fb(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(Fn+"Delay"),s=i(Fn+"Duration"),o=bf(r,s),a=i(ts+"Delay"),l=i(ts+"Duration"),c=bf(a,l);let u=null,d=0,h=0;e===Fn?o>0&&(u=Fn,d=o,h=s.length):e===ts?c>0&&(u=ts,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Fn:ts:null,h=u?u===Fn?s.length:l.length:0);const p=u===Fn&&/\b(transform|all)(,|$)/.test(n[Fn+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:p}}function bf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ef(n)+Ef(t[i])))}function Ef(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function pb(){return document.body.offsetHeight}const If=t=>{const e=t.props["onUpdate:modelValue"];return ne(e)?n=>so(e,n):e};function gb(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,_b(e,"input"))}function _b(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Cx={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=If(r);const s=i||r.props&&r.props.type==="number";sr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=ao(a)),t._assign(a)}),n&&sr(t,"change",()=>{t.value=t.value.trim()}),e||(sr(t,"compositionstart",gb),sr(t,"compositionend",Cf),sr(t,"change",Cf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=If(s),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&ao(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},mb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tx=(t,e)=>n=>{if(!("key"in n))return;const i=si(n.key);if(e.some(r=>r===i||mb[r]===i))return t(n)},vb=Xe({patchProp:lb},Kw);let Tf;function yb(){return Tf||(Tf=pw(vb))}const Sx=(...t)=>{const e=yb().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=wb(i);if(!r)return;const s=e._component;!re(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function wb(t){return Ue(t)?document.querySelector(t):t}function bb(){return Sf().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sf(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Eb=typeof Proxy=="function",Ib="devtools-plugin:setup",Cb="plugin:settings:set";class Tb{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Fd({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch(a){}s=o}},n.on(Cb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Sb(t,e){const n=Sf(),i=bb(),r=Eb&&t.enableEarlyProxy;if(i&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(Ib,t,e);else{const s=r?new Tb(t,i):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Rb="store";function ar(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Rf(t){return t!==null&&typeof t=="object"}function Ab(t){return t&&typeof t.then=="function"}function kb(t,e){return function(){return t(e)}}function Af(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function kf(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Oo(t,n,[],t._modules.root,!0),Xl(t,n,e)}function Xl(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};ar(r,function(o,a){s[a]=kb(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=xn({data:e}),t.strict&&Mb(t),i&&n&&t._withCommit(function(){i.data=null})}function Oo(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=Zl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=i.state})}var c=i.context=Pb(t,o,n);i.forEachMutation(function(u,d){var h=o+d;Ob(t,h,u,c)}),i.forEachAction(function(u,d){var h=u.root?d:o+d,p=u.handler||u;Nb(t,h,p,c)}),i.forEachGetter(function(u,d){var h=o+d;xb(t,h,u,c)}),i.forEachChild(function(u,d){Oo(t,e,n.concat(d),u,r)})}function Pb(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var l=No(s,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:i?t.commit:function(s,o,a){var l=No(s,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return Pf(t,e)}},state:{get:function(){return Zl(t.state,n)}}}),r}function Pf(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Ob(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function Nb(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return Ab(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function xb(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Mb(t){ht(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Zl(t,e){return e.reduce(function(n,i){return n[i]},t)}function No(t,e,n){return Rf(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Lb="vuex bindings",Of="vuex:mutations",ec="vuex:actions",lr="vuex",Db=0;function Fb(t,e){Sb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Lb]},function(n){n.addTimelineLayer({id:Of,label:"Vuex Mutations",color:Nf}),n.addTimelineLayer({id:ec,label:"Vuex Actions",color:Nf}),n.addInspector({id:lr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===lr)if(i.filter){var r=[];Df(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Lf(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===lr){var r=i.nodeId;Pf(e,r),i.state=Bb($b(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===lr){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(lr),n.sendInspectorState(lr),n.addTimelineEvent({layerId:Of,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=Db++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:ec,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:ec,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var Nf=8702998,Ub=6710886,Vb=16777215,xf={label:"namespaced",textColor:Vb,backgroundColor:Ub};function Mf(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Lf(t,e){return{id:e||"root",label:Mf(e),tags:t.namespaced?[xf]:[],children:Object.keys(t._children).map(function(n){return Lf(t._children[n],e+n+"/")})}}function Df(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[xf]:[]}),Object.keys(e._children).forEach(function(r){Df(t,e._children[r],n,i+r+"/")})}function Bb(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=Wb(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Mf(o):o,editable:!1,value:tc(function(){return s[o]})}})}return r}function Wb(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=tc(function(){return t[n]})}else e[n]=tc(function(){return t[n]})}),e}function $b(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function tc(t){try{return t()}catch(e){return e}}var Wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Ff={namespaced:{configurable:!0}};Ff.namespaced.get=function(){return!!this._rawModule.namespaced};Wt.prototype.addChild=function(e,n){this._children[e]=n};Wt.prototype.removeChild=function(e){delete this._children[e]};Wt.prototype.getChild=function(e){return this._children[e]};Wt.prototype.hasChild=function(e){return e in this._children};Wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wt.prototype.forEachChild=function(e){ar(this._children,e)};Wt.prototype.forEachGetter=function(e){this._rawModule.getters&&ar(this._rawModule.getters,e)};Wt.prototype.forEachAction=function(e){this._rawModule.actions&&ar(this._rawModule.actions,e)};Wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ar(this._rawModule.mutations,e)};Object.defineProperties(Wt.prototype,Ff);var vi=function(e){this.register([],e,!1)};vi.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};vi.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};vi.prototype.update=function(e){Uf([],this.root,e)};vi.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new Wt(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&ar(n.modules,function(a,l){r.register(e.concat(l),a,i)})};vi.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};vi.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function Uf(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;Uf(t.concat(i),e.getChild(i),n.modules[i])}}function Rx(t){return new ft(t)}var ft=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new vi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,p){return l.call(o,h,p)},this.commit=function(h,p,_){return c.call(o,h,p,_)},this.strict=r;var u=this._modules.root.state;Oo(this,u,[],this._modules.root),Xl(this,u),i.forEach(function(d){return d(n)})},nc={state:{configurable:!0}};ft.prototype.install=function(e,n){e.provide(n||Rb,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&Fb(e,this)};nc.state.get=function(){return this._state.data};nc.state.set=function(t){};ft.prototype.commit=function(e,n,i){var r=this,s=No(e,n,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};ft.prototype.dispatch=function(e,n){var i=this,r=No(e,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch(u){}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{i._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,i.state)})}catch(p){}u(h)},function(h){try{i._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,i.state,h)})}catch(p){}d(h)})})}};ft.prototype.subscribe=function(e,n){return Af(e,this._subscribers,n)};ft.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return Af(i,this._actionSubscribers,n)};ft.prototype.watch=function(e,n,i){var r=this;return ht(function(){return e(r.state,r.getters)},n,Object.assign({},i))};ft.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ft.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Oo(this,this.state,e,this._modules.get(e),i.preserveState),Xl(this,this.state)};ft.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Zl(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),kf(this)};ft.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ft.prototype.hotUpdate=function(e){this._modules.update(e),kf(this,!0)};ft.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ft.prototype,nc);var Ax=rc(function(t,e){var n={};return ic(e).forEach(function(i){var r=i.key,s=i.val;n[r]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.commit;if(t){var u=sc(this.$store,"mapMutations",t);if(!u)return;c=u.context.commit}return typeof s=="function"?s.apply(this,[c].concat(a)):c.apply(this.$store,[s].concat(a))}}),n}),kx=rc(function(t,e){var n={};return ic(e).forEach(function(i){var r=i.key,s=i.val;s=t+s,n[r]=function(){if(!(t&&!sc(this.$store,"mapGetters",t)))return this.$store.getters[s]},n[r].vuex=!0}),n}),Px=rc(function(t,e){var n={};return ic(e).forEach(function(i){var r=i.key,s=i.val;n[r]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=sc(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof s=="function"?s.apply(this,[c].concat(a)):c.apply(this.$store,[s].concat(a))}}),n});function ic(t){return jb(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function jb(t){return Array.isArray(t)||Rf(t)}function rc(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function sc(t,e,n){var i=t._modulesNamespaceMap[n];return i}/**
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
 */const Vf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(t,e){if(!t)throw cr(e)},cr=function(t){return new Error("Firebase Database ("+Vf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Bf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Hb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[u],n[d],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wf=function(t){const e=Bf(t);return oc.encodeByteArray(e,!0)},$f=function(t){return Wf(t).replace(/\./g,"")},ac=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qb(t){return ns(void 0,t)}function ns(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zb(n)||(t[n]=ns(t[n],e[n]));return t}function zb(t){return t!=="__proto__"}/**
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
 */class pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function jf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$f(JSON.stringify(n)),$f(JSON.stringify(o)),a].join(".")}/**
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
 */function De(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Hf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function Gb(){return typeof self=="object"&&self.self===self}function qf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zf(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gf(){return Vf.NODE_ADMIN===!0}function cc(){return typeof indexedDB=="object"}/**
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
 */const Kb="FirebaseError";class It extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=Kb,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Yb(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new It(r,a,i)}}function Yb(t,e){return t.replace(Qb,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Qb=/\{\$([^}]+)}/g;/**
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
 */function is(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
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
 */const Kf=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=is(ac(s[0])||""),n=is(ac(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(s){}return{header:e,claims:n,data:i,signature:r}},Jb=function(t){const e=Kf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xb=function(t){const e=Kf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function uc(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Yf(s)&&Yf(o)){if(!uc(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Yf(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ur(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Zb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function Qf(t,e){const n=new eE(t,e);return n.subscribe.bind(n)}class eE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=dc),r.error===void 0&&(r.error=dc),r.complete===void 0&&(r.complete=dc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(o){}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dc(){}/**
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
 */const Z=function(t,e,n,i){let r;if(i<e?r="at least "+e:i>n&&(r=n===0?"none":"no more than "+n),r){const s=t+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function gt(t,e){return`${t} failed: ${e} argument `}function He(t,e,n,i){if(!(i&&!n)&&typeof n!="function")throw new Error(gt(t,e)+"must be a valid function.")}function Jf(t,e,n,i){if(!(i&&!n)&&(typeof n!="object"||n===null))throw new Error(gt(t,e)+"must be a valid context object.")}/**
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
 */const nE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,O(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Do=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function K(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function hc(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function iE(t,e,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(d){o(d)}}function l(u){try{c(i.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(t,e||[])).next())})}function rE(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function fc(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Fo(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function Xf(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Ot=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Ei="[DEFAULT]";/**
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
 */var Zf=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new pt;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch(s){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(oE(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch(d){}try{for(var r=fc(this.instancesDeferred.entries()),s=r.next();!s.done;s=r.next()){var o=Fo(s.value,2),a=o[0],l=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:c});l.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Ei),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return iE(this,void 0,void 0,function(){var e;return rE(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Xf(Xf([],Fo(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),Fo(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Ei),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Ei),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var r=e.options,s=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var l=fc(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=Fo(c.value,2),d=u[0],h=u[1],p=this.normalizeInstanceIdentifier(d);o===p&&h.resolve(a)}}catch(_){n={error:_}}finally{try{c&&!c.done&&(i=l.return)&&i.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var i,r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);var o=this.instances.get(r);return o&&e(o,r),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,r,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=fc(s),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(e,n)}catch(c){}}}catch(c){i={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,r=i===void 0?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sE(n),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Ei),this.component?this.component.multipleInstances?e:Ei:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function sE(t){return t===Ei?void 0:t}function oE(t){return t.instantiationMode==="EAGER"}/**
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
 */var ep=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new Zf(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */const pc=[];var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const tp={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},aE=we.INFO,lE={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},cE=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=lE[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ss{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=cE,this._userLogHandler=null,pc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}function uE(t){pc.forEach(e=>{e.setLogLevel(t)})}function dE(t,e){for(const n of pc){let i=null;e&&e.level&&(i=tp[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch(c){return null}}).filter(l=>l).join(" ");s>=(i!=null?i:r.logLevel)&&t({level:we[s].toLowerCase(),message:a,args:o,type:r.name})}}}/**
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
 */class hE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fE(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function fE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const np="@firebase/app",pE="0.7.3";/**
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
 */const gc=new ss("@firebase/app"),gE="@firebase/app-compat",_E="@firebase/analytics-compat",mE="@firebase/analytics",vE="@firebase/app-check-compat",yE="@firebase/app-check",wE="@firebase/auth",bE="@firebase/auth-compat",EE="@firebase/database",IE="@firebase/database-compat",CE="@firebase/functions",TE="@firebase/functions-compat",SE="@firebase/installations",RE="@firebase/installations-compat",AE="@firebase/messaging",kE="@firebase/messaging-compat",PE="@firebase/performance",OE="@firebase/performance-compat",NE="@firebase/remote-config",xE="@firebase/remote-config-compat",ME="@firebase/storage",LE="@firebase/storage-compat",DE="@firebase/firestore",FE="@firebase/firestore-compat",UE="firebase",VE="9.1.2";/**
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
 */const Ii="[DEFAULT]",BE={[np]:"fire-core",[gE]:"fire-core-compat",[mE]:"fire-analytics",[_E]:"fire-analytics-compat",[yE]:"fire-app-check",[vE]:"fire-app-check-compat",[wE]:"fire-auth",[bE]:"fire-auth-compat",[EE]:"fire-rtdb",[IE]:"fire-rtdb-compat",[CE]:"fire-fn",[TE]:"fire-fn-compat",[SE]:"fire-iid",[RE]:"fire-iid-compat",[AE]:"fire-fcm",[kE]:"fire-fcm-compat",[PE]:"fire-perf",[OE]:"fire-perf-compat",[NE]:"fire-rc",[xE]:"fire-rc-compat",[ME]:"fire-gcs",[LE]:"fire-gcs-compat",[DE]:"fire-fst",[FE]:"fire-fst-compat","fire-js":"fire-js",[UE]:"fire-js-all"};/**
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
 */const Vn=new Map,os=new Map;function Uo(t,e){try{t.container.addComponent(e)}catch(n){gc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ip(t,e){t.container.addOrOverwriteComponent(e)}function Bn(t){const e=t.name;if(os.has(e))return gc.debug(`There were multiple attempts to register component ${e}.`),!1;os.set(e,t);for(const n of Vn.values())Uo(n,t);return!0}function rp(t,e){return t.container.getProvider(e)}function WE(t,e,n=Ii){rp(t,e).clearInstance(n)}function $E(){os.clear()}/**
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
 */const jE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},as=new yi("app","Firebase",jE);/**
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
 */class HE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const Wn=VE;function sp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw as.create("bad-app-name",{appName:String(i)});const r=Vn.get(i);if(r){if(uc(t,r.options)&&uc(n,r.config))return r;throw as.create("duplicate-app",{appName:i})}const s=new ep(i);for(const a of os.values())s.addComponent(a);const o=new HE(t,n,s);return Vn.set(i,o),o}function qE(t=Ii){const e=Vn.get(t);if(!e)throw as.create("no-app",{appName:t});return e}function zE(){return Array.from(Vn.values())}async function op(t){const e=t.name;Vn.has(e)&&(Vn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function $n(t,e,n){var i;let r=(i=BE[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gc.warn(a.join(" "));return}Bn(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function ap(t,e){if(t!==null&&typeof t!="function")throw as.create("invalid-log-argument");dE(t,e)}function lp(t){uE(t)}/**
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
 */function GE(t){Bn(new Ot("platform-logger",e=>new hE(e),"PRIVATE")),$n(np,pE,t),$n("fire-js","")}GE();var KE=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Wn,_DEFAULT_ENTRY_NAME:Ii,_addComponent:Uo,_addOrOverwriteComponent:ip,_apps:Vn,_clearComponents:$E,_components:os,_getProvider:rp,_registerComponent:Bn,_removeServiceInstance:WE,deleteApp:op,getApp:qE,getApps:zE,initializeApp:sp,onLog:ap,registerVersion:$n,setLogLevel:lp,FirebaseError:It});/**
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
 */class YE{constructor(e,n){this._delegate=e,this.firebase=n,Uo(e,new Ot("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),op(this._delegate)))}_getService(e,n=Ii){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ii){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Uo(this._delegate,e)}_addOrOverwriteComponent(e){ip(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const QE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},cp=new yi("app-compat","Firebase",QE);/**
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
 */function JE(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:$n,setLogLevel:lp,onLog:ap,apps:null,SDK_VERSION:Wn,INTERNAL:{registerComponent:a,removeApp:i,useAsService:l,modularAPIs:KE}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(c){delete e[c]}function r(c){if(c=c||Ii,!Ct(e,c))throw cp.create("no-app",{appName:c});return e[c]}r.App=t;function s(c,u={}){const d=sp(c,u);if(Ct(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,d=u.replace("-compat","");if(Bn(c)&&c.type==="PUBLIC"){const h=(p=r())=>{if(typeof p[d]!="function")throw cp.create("invalid-app-argument",{appName:u});return p[d]()};c.serviceProps!==void 0&&ns(h,c.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,u).apply(this,c.multipleInstances?p:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
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
 */function up(){const t=JE(YE);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:up,extendNamespace:e,createSubscribe:Qf,ErrorFactory:yi,deepExtend:ns});function e(n){ns(t,n)}return t}const XE=up();/**
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
 */const dp=new ss("@firebase/app-compat"),ZE="@firebase/app-compat",eI="0.1.4";/**
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
 */function tI(t){$n(ZE,eI,t)}/**
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
 */if(Gb()&&self.firebase!==void 0){dp.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&dp.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const dr=XE;tI();var nI="firebase",iI="9.1.2";/**
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
 */dr.registerVersion(nI,iI,"app-compat");const rI="@firebase/database",sI="0.12.1";/**
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
 */let hp="";function fp(t){hp=t}/**
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
 */class oI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class aI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pp=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oI(e)}}catch(e){}return new aI},Ci=pp("localStorage"),_c=pp("sessionStorage");/**
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
 */const hr=new ss("@firebase/database"),gp=function(){let t=1;return function(){return t++}}(),_p=function(t){const e=nE(t),n=new Zb;n.update(e);const i=n.digest();return oc.encodeByteArray(i)},ls=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ls.apply(null,i):typeof i=="object"?e+=Ve(i):e+=i,e+=" "}return e};let Ti=null,mp=!0;const vp=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hr.logLevel=we.VERBOSE,Ti=hr.log.bind(hr),e&&_c.set("logging_enabled",!0)):typeof t=="function"?Ti=t:(Ti=null,_c.remove("logging_enabled"))},qe=function(...t){if(mp===!0&&(mp=!1,Ti===null&&_c.get("logging_enabled")===!0&&vp(!0)),Ti){const e=ls.apply(null,t);Ti(e)}},cs=function(t){return function(...e){qe(t,...e)}},mc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ls(...t);hr.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${ls(...t)}`;throw hr.error(e),new Error(e)},lt=function(...t){const e="FIREBASE WARNING: "+ls(...t);hr.warn(e)},lI=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},yn="[MIN_NAME]",rn="[MAX_NAME]",Si=function(t,e){if(t===e)return 0;if(t===yn||e===rn)return-1;if(e===yn||t===rn)return 1;{const n=Bo(t),i=Bo(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},uI=function(t,e){return t===e?0:t<e?-1:1},us=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},vc=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ve(e[i]),n+=":",n+=vc(t[e[i]]);return n+="}",n},yp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wp=function(t){O(!Vo(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t==-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},dI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const pI=new RegExp("^-?(0*)\\d{1,10}$"),bp=-2147483648,yc=2147483647,Bo=function(t){if(pI.test(t)){const e=Number(t);if(e>=bp&&e<=yc)return e}return null},fr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw lt("Exception was thrown by user callback.",n),e},Math.floor(0))}},gI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _I{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mI{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(e)}}class pr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pr.OWNER="owner";/**
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
 */const wc="5",Ep="v",Ip="s",Cp="r",Tp="f",Sp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rp="ls",vI="p",bc="ac",Ap="websocket",kp="long_polling";/**
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
 */class Pp{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ci.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ci.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function yI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Op(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let i;if(e===Ap)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yI(t)&&(n.ns=t.namespace);const r=[];return ze(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class wI{constructor(){this.counters_={}}incrementCounter(e,n=1){Ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qb(this.counters_)}}/**
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
 */const Ec={},Ic={};function Cc(t){const e=t.toString();return Ec[e]||(Ec[e]=new wI),Ec[e]}function bI(t,e){const n=t.toString();return Ic[n]||(Ic[n]=e()),Ic[n]}/**
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
 */class EI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&fr(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Np="start",II="close",CI="pLPCommand",TI="pRTLPCB",xp="id",Mp="pw",Lp="ser",SI="cb",RI="seg",AI="ts",kI="d",PI="dframe",Dp=1870,Fp=30,OI=Dp-Fp,NI=25e3,xI=3e4;class gr{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cs(e),this.stats_=Cc(n),this.urlFn=l=>(this.appCheckToken&&(l[bc]=this.appCheckToken),Op(n,kp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new EI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xI)),cI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tc((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Np)this.id=a,this.password=l;else if(o===II)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Np]="t",i[Lp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[SI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ep]=wc,this.transportSessionId&&(i[Ip]=this.transportSessionId),this.lastSessionId&&(i[Rp]=this.lastSessionId),this.applicationId&&(i[vI]=this.applicationId),this.appCheckToken&&(i[bc]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Sp.test(location.hostname)&&(i[Cp]=Tp);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gr.forceAllow_=!0}static forceDisallow(){gr.forceDisallow_=!0}static isAvailable(){return gr.forceAllow_?!0:!gr.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!dI()&&!hI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Wf(n),r=yp(i,OI);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[PI]="t",i[xp]=e,i[Mp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tc{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gp(),window[CI+this.uniqueCallbackIdentifier]=e,window[TI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tc.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch(n){const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xp]=this.myID,e[Mp]=this.myPW,e[Lp]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fp+i.length<=Dp;){const o=this.pendingSegs.shift();i=i+"&"+RI+r+"="+o.seg+"&"+AI+r+"="+o.ts+"&"+kI+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(NI)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(i){}},Math.floor(1))}}/**
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
 */const MI=16384,LI=45e3;let Wo=null;typeof MozWebSocket!="undefined"?Wo=MozWebSocket:typeof WebSocket!="undefined"&&(Wo=WebSocket);class $t{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cs(this.connId),this.stats_=Cc(n),this.connURL=$t.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[Ep]=wc,typeof location!="undefined"&&location.hostname&&Sp.test(location.hostname)&&(s[Cp]=Tp),n&&(s[Ip]=n),i&&(s[Rp]=i),r&&(s[bc]=r),Op(e,Ap,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ci.set("previous_websocket_failure",!0);try{if(!Gf()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Wo(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wo!==null&&!$t.forceDisallow_}static previouslyFailed(){return Ci.isInMemoryStorage||Ci.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ci.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=is(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=yp(n,MI);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(LI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
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
 */class Sc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gr,$t]}initTransports_(e){const n=$t&&$t.isAvailable();let i=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[$t];else{const r=this.transports_=[];for(const s of Sc.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
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
 */const DI=6e4,FI=5e3,UI=10*1024,VI=100*1024,Rc="t",Up="d",BI="s",Vp="r",WI="e",Bp="o",Wp="a",$p="n",jp="p",$I="h";class jI{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cs("c:"+this.id+":"),this.transportManager_=new Sc(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>VI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>UI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rc in e){const n=e[Rc];n===Wp?this.upgradeIfSecondaryHealthy_():n===Vp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=us("t",e),i=us("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$p,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=us("t",e),i=us("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=us(Rc,e);if(Up in e){const i=e[Up];if(n===$I)this.onHandshake_(i);else if(n===$p){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===BI?this.onConnectionShutdown_(i):n===Vp?this.onReset_(i):n===WI?mc("Server Error: "+i):n===Bp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wc!==i&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ci.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Hp{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class qp{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $o extends qp{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!lc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $o}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zp=32,Gp=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new ve("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jn(t){return t.pieces_.length-t.pieceNum_}function Ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function Ac(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function HI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Kp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Oe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ve)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ve(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function ct(t,e){const n=se(t),i=se(e);if(n===null)return e;if(n===i)return ct(Ie(t),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function qI(t,e){const n=hs(t,0),i=hs(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Si(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function kc(t,e){if(jn(t)!==jn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Nt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(jn(t)>jn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class zI{constructor(e,n){this.errorPrefix_=n,this.parts_=hs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Do(this.parts_[i]);Yp(this)}}function GI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Do(e),Yp(t)}function KI(t){const e=t.parts_.pop();t.byteLength_-=Do(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yp(t){if(t.byteLength_>Gp)throw new Error(t.errorPrefix_+"has a key path longer than "+Gp+" bytes ("+t.byteLength_+").");if(t.parts_.length>zp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zp+") or object contains a cycle "+Ri(t))}function Ri(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Pc extends qp{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Pc}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const fs=1e3,YI=60*5*1e3,QI=3*1e3,Qp=30*1e3,JI=1.3,XI=3e4,ZI="server_kill",Jp=3;class wn extends Hp{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wn.nextPersistentConnectionId_++,this.log_=cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=fs,this.maxReconnectDelay_=YI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Gf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$o.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ve(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new pt,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},QI),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;wn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ct(e,"w")){const i=wi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Jb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mc("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>XI&&(this.reconnectDelay_=fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*JI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+wn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new jI(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{lt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ZI)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&lt(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mo(this.interruptReasons_)&&(this.reconnectDelay_=fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>vc(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ve(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jp&&(this.reconnectDelay_=Qp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hp.replace(/\./g,"-")]=1,lc()?e["framework.cordova"]=1:xo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$o.getInstance().currentlyOnline();return Mo(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class jo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ae(yn,e),r=new ae(yn,n);return this.compare(i,r)!==0}minPost(){return ae.MIN}}/**
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
 */let Ho;class Xp extends jo{static get __EMPTY_NODE(){return Ho}static set __EMPTY_NODE(e){Ho=e}compare(e,n){return Si(e.name,n.name)}isDefinedOn(e){throw cr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(rn,Ho)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Ho)}toString(){return".key"}}const sn=new Xp;/**
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
 */class qo{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Ge.RED,this.left=r!=null?r:_t.EMPTY_NODE,this.right=s!=null?s:_t.EMPTY_NODE}copy(e,n,i,r,s){return new Ge(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class eC{copy(e,n,i,r,s){return this}insert(e,n,i){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qo(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new eC;/**
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
 */function tC(t,e){return Si(t.name,e.name)}function Oc(t,e){return Si(t,e)}/**
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
 */let Nc;function nC(t){Nc=t}const Zp=function(t){return typeof t=="number"?"number:"+wp(t):"string:"+t},eg=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ct(e,".sv"),"Priority must be a string or number.")}else O(t===Nc||t.isEmpty(),"priority of unexpected type.");O(t===Nc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let tg;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eg(this.priorityNode_)}static set __childrenNodeConstructor(e){tg=e}static get __childrenNodeConstructor(){return tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=se(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wp(this.value_):e+=this.value_,this.lazyHash_=_p(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Ke.VALUE_TYPE_ORDER.indexOf(n),s=Ke.VALUE_TYPE_ORDER.indexOf(i);return O(r>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ng,ig;function iC(t){ng=t}function rC(t){ig=t}class sC extends jo{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(rn,new Ke("[PRIORITY-POST]",ig))}makePost(e,n){const i=ng(e);return new ae(n,new Ke("[PRIORITY-POST]",i))}toString(){return".priority"}}const Te=new sC;/**
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
 */const oC=Math.log(2);class aC{constructor(e){const n=s=>parseInt(Math.log(s)/oC,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zo=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=r(l,p),C=r(p+1,c);return d=t[p],h=n?n(d):d,new Ge(h,d.node,Ge.BLACK,_,C)}},s=function(l){let c=null,u=null,d=t.length;const h=function(_,C){const w=d-_,y=d;d-=_;const E=r(w+1,y),k=t[w],R=n?n(k):k;p(new Ge(R,k.node,C,null,E))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const C=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));C?h(w,Ge.BLACK):(h(w,Ge.BLACK),h(w,Ge.RED))}return u},o=new aC(t.length),a=s(o);return new _t(i||e,a)};/**
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
 */let xc;const _r={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(_r&&Te,"ChildrenNode.ts has not been loaded"),xc=xc||new bn({".priority":_r},{".priority":Te}),xc}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return Ct(this.indexSet_,e.toString())}addIndex(e,n){O(e!==sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(ae.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=zo(i,e.getCompare()):a=_r;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new bn(u,c)}addToIndexes(e,n){const i=Lo(this.indexes_,(r,s)=>{const o=wi(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),r===_r)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),zo(a,o.getCompare())}else return _r;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new bn(i,this.indexSet_)}removeFromIndexes(e,n){const i=Lo(this.indexes_,r=>{if(r===_r)return r;{const s=n.get(e.name);return s?r.remove(new ae(e.name,s)):r}});return new bn(i,this.indexSet_)}}/**
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
 */let ps;class X{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&eg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ps||(ps=new X(new _t(Oc),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ps:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ae(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ps:this.priorityNode_;return new X(r,o,s)}}updateChild(e,n){const i=se(e);if(i===null)return n;{O(se(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Ie(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Te,(o,a)=>{n[o]=a.val(e),i++,s&&X.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zp(this.getPriority().val())+":"),this.forEachChild(Te,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":_p(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new ae(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===sn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Te),r=n.getIterator(Te);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===sn?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lC extends X{constructor(){super(new _t(Oc),X.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const gs=new lC;Object.defineProperties(ae,{MIN:{value:new ae(yn,X.EMPTY_NODE)},MAX:{value:new ae(rn,gs)}});Xp.__EMPTY_NODE=X.EMPTY_NODE;Ke.__childrenNodeConstructor=X;nC(gs);rC(gs);/**
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
 */const cC=!0;function Ne(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,Ne(e))}if(!(t instanceof Array)&&cC){const n=[];let i=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return X.EMPTY_NODE;const s=zo(n,tC,o=>o.name,Oc);if(i){const o=zo(n,Te.getCompare());return new X(s,Ne(e),new bn({".priority":o},{".priority":Te}))}else return new X(s,Ne(e),bn.Default)}else{let n=X.EMPTY_NODE;return ze(t,(i,r)=>{if(Ct(t,i)&&i.substring(0,1)!=="."){const s=Ne(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ne(e))}}iC(Ne);/**
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
 */class Mc extends jo{constructor(e){super();this.indexPath_=e,O(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Si(e.name,n.name):s}makePost(e,n){const i=Ne(e),r=X.EMPTY_NODE.updateChild(this.indexPath_,i);return new ae(n,r)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,gs);return new ae(rn,e)}toString(){return hs(this.indexPath_,0).join("/")}}/**
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
 */class uC extends jo{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Si(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const i=Ne(e);return new ae(n,i)}toString(){return".value"}}const Lc=new uC;/**
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
 */const mr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Dc="-",rg="z",sg=786,dC=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=mr.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=mr.charAt(e[r]);return O(o.length===20,"nextPushId: Length should be 20."),o}}(),og=function(t){if(t===""+yc)return Dc;const e=Bo(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<sg)return n.push(Dc),n.join("");let i=n.length-1;for(;i>=0&&n[i]===rg;)i--;if(i===-1)return rn;const r=n[i],s=mr.charAt(mr.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},ag=function(t){if(t===""+bp)return yn;const e=Bo(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let i=0;i<n.length;i++)n[i]=t.charAt(i);return n[n.length-1]===Dc?n.length===1?""+yc:(delete n[n.length-1],n.join("")):(n[n.length-1]=mr.charAt(mr.indexOf(n[n.length-1])-1),n.join("")+rg.repeat(sg-n.length))};/**
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
 */function lg(t){return{type:"value",snapshotNode:t}}function vr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fc{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vr(n,i)):o.trackChildChange(ms(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Te,(r,s)=>{n.hasChild(r)||i.trackChildChange(_s(r,s))}),n.isLeafNode()||n.forEachChild(Te,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(ms(r,s,o))}else i.trackChildChange(vr(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vs{constructor(e){this.indexedFilter_=new Fc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new ae(n,i))||(i=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=X.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(X.EMPTY_NODE);const s=this;return n.forEachChild(Te,(o,a)=>{s.matches(new ae(o,a))||(r=r.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fC{constructor(e){this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new ae(n,i))||(i=X.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=X.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(X.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(h,p)=>d(p,h)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:r=r.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new ae(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(ms(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(_s(n,d));const C=a.updateImmediateChild(n,X.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(vr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(_s(c.name,c.node)),s.trackChildChange(vr(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
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
 */class Go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Te}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Te}copy(){const e=new Go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pC(t){return t.loadsAllData()?new Fc(t.getIndex()):t.hasLimit()?new fC(t):new vs(t)}function gC(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function _C(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Uc(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function mC(t,e,n){let i;if(t.index_===sn)typeof e=="string"&&(e=og(e)),i=Uc(t,e,n);else{let r;n==null?r=rn:r=og(n),i=Uc(t,e,r)}return i.startAfterSet_=!0,i}function Vc(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function vC(t,e,n){let i,r;return t.index_===sn?(typeof e=="string"&&(e=ag(e)),r=Vc(t,e,n)):(n==null?i=yn:i=ag(n),r=Vc(t,e,i)),r.endBeforeSet_=!0,r}function Ko(t,e){const n=t.copy();return n.index_=e,n}function cg(t){const e={};if(t.isDefault())return e;let n;return t.index_===Te?n="$priority":t.index_===Lc?n="$value":t.index_===sn?n="$key":(O(t.index_ instanceof Mc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_&&(e.startAt=Ve(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ve(t.indexStartName_))),t.endSet_&&(e.endAt=Ve(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ve(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ug(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Te&&(e.i=t.index_.toString()),e}/**
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
 */class Yo extends Hp{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Yo.getListenId_(e,i),a={};this.listens_[o]=a;const l=cg(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),wi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Yo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=cg(e._queryParams),i=e._path.toString(),r=new pt;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=is(a.responseText)}catch(c){lt("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class yC{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Qo(){return{value:null,children:new Map}}function yr(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=se(e);t.children.has(i)||t.children.set(i,Qo());const r=t.children.get(i);e=Ie(e),yr(r,e,n)}}function Bc(t,e){if(oe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Te,(i,r)=>{yr(t,new ve(i),r)}),Bc(t,e)}}else if(t.children.size>0){const n=se(e);return e=Ie(e),t.children.has(n)&&Bc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Wc(t,e,n){t.value!==null?n(e,t.value):wC(t,(i,r)=>{const s=new ve(e.toString()+"/"+i);Wc(r,s,n)})}function wC(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class bC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
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
 */const dg=10*1e3,EC=30*1e3,IC=5*60*1e3;class CC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bC(e);const i=dg+(EC-dg)*Math.random();ds(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;ze(e,(r,s)=>{s>0&&Ct(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*IC))}}/**
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
 */var jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jt||(jt={}));function $c(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function jc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Jo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=jt.ACK_USER_WRITE,this.source=$c()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Jo(me(),n,this.revert)}}else return O(se(this.path)===e,"operationForChild called for unrelated child."),new Jo(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=jt.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new ys(this.source,me()):new ys(this.source,Ie(this.path))}}/**
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
 */class Ai{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=jt.OVERWRITE}operationForChild(e){return oe(this.path)?new Ai(this.source,me(),this.snap.getImmediateChild(e)):new Ai(this.source,Ie(this.path),this.snap)}}/**
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
 */class wr{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=jt.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Ai(this.source,me(),n.value):new wr(this.source,me(),n)}else return O(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wr(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class TC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SC(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(hC(o.childName,o.snapshotNode))}),ws(t,r,"child_removed",e,i,n),ws(t,r,"child_added",e,i,n),ws(t,r,"child_moved",s,i,n),ws(t,r,"child_changed",e,i,n),ws(t,r,"value",e,i,n),r}function ws(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>AC(t,a,l)),o.forEach(a=>{const l=RC(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function RC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AC(t,e,n){if(e.childName==null||n.childName==null)throw cr("Should only compare child_ events.");const i=new ae(e.childName,e.snapshotNode),r=new ae(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
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
 */function Xo(t,e){return{eventCache:t,serverCache:e}}function bs(t,e,n,i){return Xo(new Hn(e,n,i),t.serverCache)}function hg(t,e,n,i){return Xo(t.eventCache,new Hn(e,n,i))}function Zo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ki(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let qc;const kC=()=>(qc||(qc=new _t(uI)),qc);class Se{constructor(e,n=kC()){this.value=e,this.children=n}static fromObject(e){let n=new Se(null);return ze(e,(i,r)=>{n=n.set(new ve(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(oe(e))return null;{const i=se(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Ie(e),n);return s!=null?{path:Oe(new ve(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),i=this.children.get(n);return i!==null?i.subtree(Ie(e)):new Se(null)}}set(e,n){if(oe(e))return new Se(n,this.children);{const i=se(e),s=(this.children.get(i)||new Se(null)).set(Ie(e),n),o=this.children.insert(i,s);return new Se(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),i=this.children.get(n);if(i){const r=i.remove(Ie(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new Se(null):new Se(this.value,s)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),i=this.children.get(n);return i?i.get(Ie(e)):null}}setTree(e,n){if(oe(e))return n;{const i=se(e),s=(this.children.get(i)||new Se(null)).setTree(Ie(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new Se(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Oe(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(oe(e))return null;{const s=se(e),o=this.children.get(s);return o?o.findOnPath_(Ie(e),Oe(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,i){if(oe(e))return this;{this.value&&i(n,this.value);const r=se(e),s=this.children.get(r);return s?s.foreachOnPath_(Ie(e),Oe(n,r),i):new Se(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Oe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new Se(null))}}function Es(t,e,n){if(oe(e))return new Ht(new Se(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=ct(r,e);return s=s.updateChild(o,n),new Ht(t.writeTree_.set(r,s))}else{const r=new Se(n),s=t.writeTree_.setTree(e,r);return new Ht(s)}}}function zc(t,e,n){let i=t;return ze(n,(r,s)=>{i=Es(i,Oe(e,r),s)}),i}function fg(t,e){if(oe(e))return Ht.empty();{const n=t.writeTree_.setTree(e,new Se(null));return new Ht(n)}}function Gc(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ct(n.path,e)):null}function pg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Te,(i,r)=>{e.push(new ae(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new ae(i,r.value))}),e}function qn(t,e){if(oe(e))return t;{const n=Pi(t,e);return n!=null?new Ht(new Se(n)):new Ht(t.writeTree_.subtree(e))}}function Kc(t){return t.writeTree_.isEmpty()}function br(t,e){return gg(me(),t.writeTree_,e)}function gg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=gg(Oe(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Oe(t,".priority"),i)),n}}/**
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
 */function ea(t,e){return wg(e,t)}function PC(t,e,n,i,r){O(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=i}function OC(t,e,n,i){O(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=zc(t.visibleWrites,e,n),t.lastWriteId=i}function NC(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function xC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&MC(a,i.path)?r=!1:Nt(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return LC(t),!0;if(i.snap)t.visibleWrites=fg(t.visibleWrites,i.path);else{const a=i.children;ze(a,l=>{t.visibleWrites=fg(t.visibleWrites,Oe(i.path,l))})}return!0}else return!1}function MC(t,e){if(t.snap)return Nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Nt(Oe(t.path,n),e))return!0;return!1}function LC(t){t.visibleWrites=_g(t.allWrites,DC,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DC(t){return t.visible}function _g(t,e,n){let i=Ht.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)Nt(n,o)?(a=ct(n,o),i=Es(i,a,s.snap)):Nt(o,n)&&(a=ct(o,n),i=Es(i,me(),s.snap.getChild(a)));else if(s.children){if(Nt(n,o))a=ct(n,o),i=zc(i,a,s.children);else if(Nt(o,n))if(a=ct(o,n),oe(a))i=zc(i,me(),s.children);else{const l=wi(s.children,se(a));if(l){const c=l.getChild(Ie(a));i=Es(i,me(),c)}}}else throw cr("WriteRecord should have .snap or .children")}}return i}function mg(t,e,n,i,r){if(!i&&!r){const s=Pi(t.visibleWrites,e);if(s!=null)return s;{const o=qn(t.visibleWrites,e);if(Kc(o))return n;if(n==null&&!Gc(o,me()))return null;{const a=n||X.EMPTY_NODE;return br(o,a)}}}else{const s=qn(t.visibleWrites,e);if(!r&&Kc(s))return n;if(!r&&n==null&&!Gc(s,me()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(Nt(c.path,e)||Nt(e,c.path))},a=_g(t.allWrites,o,e),l=n||X.EMPTY_NODE;return br(a,l)}}}function FC(t,e,n){let i=X.EMPTY_NODE;const r=Pi(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Te,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=qn(t.visibleWrites,e);return n.forEachChild(Te,(o,a)=>{const l=br(qn(s,new ve(o)),a);i=i.updateImmediateChild(o,l)}),pg(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=qn(t.visibleWrites,e);return pg(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function UC(t,e,n,i,r){O(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Oe(e,n);if(Gc(t.visibleWrites,s))return null;{const o=qn(t.visibleWrites,s);return Kc(o)?r.getChild(n):br(o,r.getChild(n))}}function VC(t,e,n,i){const r=Oe(e,n),s=Pi(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=qn(t.visibleWrites,r);return br(o,i.getNode().getImmediateChild(n))}else return null}function BC(t,e){return Pi(t.visibleWrites,e)}function WC(t,e,n,i,r,s,o){let a;const l=qn(t.visibleWrites,e),c=Pi(l,me());if(c!=null)a=c;else if(n!=null)a=br(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&u.length<r;)d(p,i)!==0&&u.push(p),p=h.getNext();return u}else return[]}function $C(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function ta(t,e,n,i){return mg(t.writeTree,t.treePath,e,n,i)}function Yc(t,e){return FC(t.writeTree,t.treePath,e)}function vg(t,e,n,i){return UC(t.writeTree,t.treePath,e,n,i)}function na(t,e){return BC(t.writeTree,Oe(t.treePath,e))}function jC(t,e,n,i,r,s){return WC(t.writeTree,t.treePath,e,n,i,r,s)}function Qc(t,e,n){return VC(t.writeTree,t.treePath,e,n)}function yg(t,e){return wg(Oe(t.treePath,e),t.writeTree)}function wg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class HC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,ms(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,_s(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,vr(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,ms(i,e.snapshotNode,r.oldSnap));else throw cr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class qC{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const bg=new qC;class Jc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ki(this.viewCache_),s=jC(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function zC(t){return{filter:t}}function GC(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KC(t,e,n,i,r){const s=new HC;let o,a;if(n.type===jt.OVERWRITE){const c=n;c.source.fromUser?o=Xc(t,e,c.path,c.snap,i,r,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=ia(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===jt.MERGE){const c=n;c.source.fromUser?o=QC(t,e,c.path,c.children,i,r,s):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zc(t,e,c.path,c.children,i,r,a,s))}else if(n.type===jt.ACK_USER_WRITE){const c=n;c.revert?o=ZC(t,e,c.path,i,r,s):o=JC(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===jt.LISTEN_COMPLETE)o=XC(t,e,n.path,i,s);else throw cr("Unknown operation type: "+n.type);const l=s.getChanges();return YC(e,o,l),{viewCache:o,changes:l}}function YC(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Zo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(lg(Zo(e)))}}function Eg(t,e,n,i,r,s){const o=e.eventCache;if(na(i,n)!=null)return e;{let a,l;if(oe(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ki(e),u=c instanceof X?c:X.EMPTY_NODE,d=Yc(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=ta(i,ki(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=se(n);if(c===".priority"){O(jn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=vg(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ie(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=vg(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Qc(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return bs(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function ia(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=se(n);if(!l.isCompleteForPath(n)&&jn(n)>1)return e;const _=Ie(n),w=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),p,w,_,bg,null)}const d=hg(e,c,l.isFullyInitialized()||oe(n),u.filtersNodes()),h=new Jc(r,d,s);return Eg(t,d,n,r,h,a)}function Xc(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Jc(r,e,s);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=bs(e,c,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=bs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ie(n),p=a.getNode().getImmediateChild(d);let _;if(oe(h))_=i;else{const C=u.getCompleteChild(d);C!=null?Ac(h)===".priority"&&C.getChild(Kp(h)).isEmpty()?_=C:_=C.updateChild(h,i):_=X.EMPTY_NODE}if(p.equals(_))l=e;else{const C=t.filter.updateChild(a.getNode(),d,_,h,u,o);l=bs(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ig(t,e){return t.eventCache.isCompleteForChild(e)}function QC(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Oe(n,l);Ig(e,se(u))&&(a=Xc(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Oe(n,l);Ig(e,se(u))||(a=Xc(t,a,u,c,r,s,o))}),a}function Cg(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Zc(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;oe(n)?c=i:c=new Se(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=Cg(t,p,h);l=ia(t,l,new ve(d),_,r,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===void 0;if(!u.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),C=Cg(t,_,h);l=ia(t,l,new ve(d),C,r,s,o,a)}}),l}function JC(t,e,n,i,r,s,o){if(na(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ia(t,e,n,l.getNode().getChild(n),r,s,a,o);if(oe(n)){let c=new Se(null);return l.getNode().forEachChild(sn,(u,d)=>{c=c.set(new ve(u),d)}),Zc(t,e,n,c,r,s,a,o)}else return e}else{let c=new Se(null);return i.foreach((u,d)=>{const h=Oe(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Zc(t,e,n,c,r,s,a,o)}}function XC(t,e,n,i,r){const s=e.serverCache,o=hg(e,s.getNode(),s.isFullyInitialized()||oe(n),s.isFiltered());return Eg(t,o,n,i,bg,r)}function ZC(t,e,n,i,r,s){let o;if(na(i,n)!=null)return e;{const a=new Jc(i,e,r),l=e.eventCache.getNode();let c;if(oe(n)||se(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ta(i,ki(e));else{const d=e.serverCache.getNode();O(d instanceof X,"serverChildren would be complete if leaf node"),u=Yc(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=se(n);let d=Qc(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ie(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,Ie(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ta(i,ki(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||na(i,me())!=null,bs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class eT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Fc(i.getIndex()),s=pC(i);this.processor_=zC(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new Hn(l,o.isFullyInitialized(),r.filtersNodes()),d=new Hn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xo(d,u),this.eventGenerator_=new TC(this.query_)}get query(){return this.query_}}function tT(t){return t.viewCache_.serverCache.getNode()}function nT(t){return Zo(t.viewCache_)}function iT(t,e){const n=ki(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Tg(t){return t.eventRegistrations_.length===0}function rT(t,e){t.eventRegistrations_.push(e)}function Sg(t,e,n){const i=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Rg(t,e,n,i){e.type===jt.MERGE&&e.source.queryId!==null&&(O(ki(t.viewCache_),"We should always have a full cache before handling merges"),O(Zo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=KC(t.processor_,r,e,n,i);return GC(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ag(t,s.changes,s.viewCache.eventCache.getNode(),null)}function sT(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Te,(s,o)=>{i.push(vr(s,o))}),n.isFullyInitialized()&&i.push(lg(n.getNode())),Ag(t,i,n.getNode(),e)}function Ag(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return SC(t.eventGenerator_,e,n,r)}/**
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
 */let ra;class kg{constructor(){this.views=new Map}}function oT(t){O(!ra,"__referenceConstructor has already been defined"),ra=t}function aT(){return O(ra,"Reference.ts has not been loaded"),ra}function lT(t){return t.views.size===0}function eu(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return O(s!=null,"SyncTree gave us an op for an invalid query."),Rg(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Rg(o,e,n,i));return s}}function Pg(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ta(n,r?i:null),l=!1;a?l=!0:i instanceof X?(a=Yc(n,i),l=!1):(a=X.EMPTY_NODE,l=!1);const c=Xo(new Hn(a,l,!1),new Hn(i,r,!1));return new eT(e,c)}return o}function cT(t,e,n,i,r,s){const o=Pg(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rT(o,n),sT(o,n)}function uT(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Gn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Sg(c,n,i)),Tg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Sg(l,n,i)),Tg(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Gn(t)&&s.push(new(aT())(e._repo,e._path)),{removed:s,events:o}}function Og(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function zn(t,e){let n=null;for(const i of t.views.values())n=n||iT(i,e);return n}function Ng(t,e){if(e._queryParams.loadsAllData())return sa(t);{const i=e._queryIdentifier;return t.views.get(i)}}function xg(t,e){return Ng(t,e)!=null}function Gn(t){return sa(t)!=null}function sa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let oa;function dT(t){O(!oa,"__referenceConstructor has already been defined"),oa=t}function hT(){return O(oa,"Reference.ts has not been loaded"),oa}let fT=1;class Mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=$C(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tu(t,e,n,i,r){return PC(t.pendingWriteTree_,e,n,i,r),r?Er(t,new Ai($c(),e,n)):[]}function pT(t,e,n,i){OC(t.pendingWriteTree_,e,n,i);const r=Se.fromObject(n);return Er(t,new wr($c(),e,r))}function Kn(t,e,n=!1){const i=NC(t.pendingWriteTree_,e);if(xC(t.pendingWriteTree_,e)){let s=new Se(null);return i.snap!=null?s=s.set(me(),!0):ze(i.children,o=>{s=s.set(new ve(o),!0)}),Er(t,new Jo(i.path,s,n))}else return[]}function Is(t,e,n){return Er(t,new Ai(jc(),e,n))}function gT(t,e,n){const i=Se.fromObject(n);return Er(t,new wr(jc(),e,i))}function _T(t,e){return Er(t,new ys(jc(),e))}function mT(t,e,n){const i=iu(t,n);if(i){const r=ru(i),s=r.path,o=r.queryId,a=ct(s,e),l=new ys(Hc(o),a);return su(t,s,l)}else return[]}function nu(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||xg(s,e))){const a=uT(s,e,n,i);lT(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,h)=>Gn(h));if(c&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const h=bT(d);for(let p=0;p<h.length;++p){const _=h[p],C=_.query,w=Ug(t,_);t.listenProvider_.startListening(Cs(C),la(t,C),w.hashFn,w.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const d=null;t.listenProvider_.stopListening(Cs(e),d)}else l.forEach(d=>{const h=t.queryToTagMap.get(ca(d));t.listenProvider_.stopListening(Cs(d),h)});ET(t,l)}return o}function vT(t,e,n,i){const r=iu(t,i);if(r!=null){const s=ru(r),o=s.path,a=s.queryId,l=ct(o,e),c=new Ai(Hc(a),l,n);return su(t,o,c)}else return[]}function yT(t,e,n,i){const r=iu(t,i);if(r){const s=ru(r),o=s.path,a=s.queryId,l=ct(o,e),c=Se.fromObject(n),u=new wr(Hc(a),l,c);return su(t,o,u)}else return[]}function Lg(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const p=ct(d,i);r=r||zn(h,p),s=s||Gn(h)});let o=t.syncPointTree_.get(i);o?(s=s||Gn(o),r=r||zn(o,me())):(o=new kg,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,p)=>{const _=zn(p,me());_&&(r=r.updateImmediateChild(h,_))}));const l=xg(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=ca(e);O(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=IT();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const c=ea(t.pendingWriteTree_,i);let u=cT(o,e,n,c,r,a);if(!l&&!s){const d=Ng(o,e);u=u.concat(CT(t,e,d))}return u}function aa(t,e,n){const i=!0,r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ct(o,e),c=zn(a,l);if(c)return c});return mg(r,e,s,n,i)}function wT(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ct(c,n);i=i||zn(u,d)});let r=t.syncPointTree_.get(n);r?i=i||zn(r,me()):(r=new kg,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Hn(i,!0,!1):null,a=ea(t.pendingWriteTree_,e._path),l=Pg(r,e,a,s?o.getNode():X.EMPTY_NODE,s);return nT(l)}function Er(t,e){return Dg(e,t.syncPointTree_,null,ea(t.pendingWriteTree_,me()))}function Dg(t,e,n,i){if(oe(t.path))return Fg(t,e,n,i);{const r=e.get(me());n==null&&r!=null&&(n=zn(r,me()));let s=[];const o=se(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yg(i,o);s=s.concat(Dg(a,l,c,u))}return r&&(s=s.concat(eu(r,t,i,n))),s}}function Fg(t,e,n,i){const r=e.get(me());n==null&&r!=null&&(n=zn(r,me()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yg(i,o),u=t.operationForChild(o);u&&(s=s.concat(Fg(u,a,l,c)))}),r&&(s=s.concat(eu(r,t,i,n))),s}function Ug(t,e){const n=e.query,i=la(t,n);return{hashFn:()=>(tT(e)||X.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?mT(t,n._path,i):_T(t,n._path);{const s=fI(r,n);return nu(t,n,null,s)}}}}function la(t,e){const n=ca(e);return t.queryToTagMap.get(n)}function ca(t){return t._path.toString()+"$"+t._queryIdentifier}function iu(t,e){return t.tagToQueryMap.get(e)}function ru(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function su(t,e,n){const i=t.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const r=ea(t.pendingWriteTree_,e);return eu(i,n,r,null)}function bT(t){return t.fold((e,n,i)=>{if(n&&Gn(n))return[sa(n)];{let r=[];return n&&(r=Og(n)),ze(i,(s,o)=>{r=r.concat(o)}),r}})}function Cs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hT())(t._repo,t._path):t}function ET(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=ca(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function IT(){return fT++}function CT(t,e,n){const i=e._path,r=la(t,e),s=Ug(t,n),o=t.listenProvider_.startListening(Cs(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)O(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!oe(c)&&u&&Gn(u))return[sa(u).query];{let h=[];return u&&(h=h.concat(Og(u).map(p=>p.query))),ze(d,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Cs(u),la(t,u))}}return o}/**
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
 */class ou{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ou(n)}node(){return this.node_}}class au{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new au(this.syncTree_,n)}node(){return aa(this.syncTree_,this.path_)}}const TT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Vg=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return ST(t[".sv"],e,n);if(typeof t[".sv"]=="object")return RT(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},ST=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},RT=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const r=e.node();if(O(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Bg=function(t,e,n,i){return cu(e,new au(n,t),i)},lu=function(t,e,n){return cu(t,new ou(e),n)};function cu(t,e,n){const i=t.getPriority().val(),r=Vg(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Vg(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ke(a,Ne(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ke(r))),o.forEachChild(Te,(a,l)=>{const c=cu(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class uu{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function ua(t,e){let n=e instanceof ve?e:new ve(e),i=t,r=se(n);for(;r!==null;){const s=wi(i.node.children,r)||{children:{},childCount:0};i=new uu(r,i,s),n=Ie(n),r=se(n)}return i}function Oi(t){return t.node.value}function du(t,e){t.node.value=e,hu(t)}function Wg(t){return t.node.childCount>0}function AT(t){return Oi(t)===void 0&&!Wg(t)}function da(t,e){ze(t.node.children,(n,i)=>{e(new uu(n,t,i))})}function $g(t,e,n,i){n&&!i&&e(t),da(t,r=>{$g(r,e,!0,i)}),n&&i&&e(t)}function kT(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ts(t){return new ve(t.parent===null?t.name:Ts(t.parent)+"/"+t.name)}function hu(t){t.parent!==null&&PT(t.parent,t.name,t)}function PT(t,e,n){const i=AT(n),r=Ct(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,hu(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,hu(t))}/**
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
 */const OT=/[\[\].#$\/\u0000-\u001F\u007F]/,NT=/[\[\].#$\u0000-\u001F\u007F]/,fu=10*1024*1024,ha=function(t){return typeof t=="string"&&t.length!==0&&!OT.test(t)},jg=function(t){return typeof t=="string"&&t.length!==0&&!NT.test(t)},xT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jg(t)},Ss=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vo(t)||t&&typeof t=="object"&&Ct(t,".sv")},on=function(t,e,n,i){i&&e===void 0||Rs(gt(t,"value"),e,n)},Rs=function(t,e,n){const i=n instanceof ve?new zI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ri(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ri(i)+" with contents = "+e.toString());if(Vo(e))throw new Error(t+"contains "+e.toString()+" "+Ri(i));if(typeof e=="string"&&e.length>fu/3&&Do(e)>fu)throw new Error(t+"contains a string greater than "+fu+" utf8 bytes "+Ri(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(ze(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ha(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ri(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);GI(i,o),Rs(t,a,i),KI(i)}),r&&s)throw new Error(t+' contains ".value" child '+Ri(i)+" in addition to actual children.")}},MT=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=hs(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ha(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(qI);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&Nt(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Hg=function(t,e,n,i){if(i&&e===void 0)return;const r=gt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];ze(e,(o,a)=>{const l=new ve(o);if(Rs(r,a,Oe(n,l)),Ac(l)===".priority"&&!Ss(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),MT(r,s)},pu=function(t,e,n){if(!(n&&e===void 0)){if(Vo(e))throw new Error(gt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ss(e))throw new Error(gt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},As=function(t,e,n,i){if(!(i&&n===void 0)&&!ha(n))throw new Error(gt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ks=function(t,e,n,i){if(!(i&&n===void 0)&&!jg(n))throw new Error(gt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LT=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ks(t,e,n,i)},xt=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qg=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ha(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xT(n))throw new Error(gt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class DT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fa(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!kc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function gu(t,e,n){fa(t,n),zg(t,i=>kc(i,e))}function Mt(t,e,n){fa(t,n),zg(t,i=>Nt(i,e)||Nt(e,i))}function zg(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(FT(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function FT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ti&&qe("event: "+n.toString()),fr(i)}}}/**
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
 */const Gg="repo_interrupt",UT=25;class VT{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qo(),this.transactionQueueTree_=new uu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BT(t,e,n){if(t.stats_=Cc(t.repoInfo_),t.forceRestClient_||gI())t.server_=new Yo(t.repoInfo_,(i,r,s,o)=>{Yg(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Qg(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new wn(t.repoInfo_,e,(i,r,s,o)=>{Yg(t,i,r,s,o)},i=>{Qg(t,i)},i=>{WT(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=bI(t.repoInfo_,()=>new CC(t.stats_,t.server_)),t.infoData_=new yC,t.infoSyncTree_=new Mg({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Is(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_u(t,"connected",!1),t.serverSyncTree_=new Mg({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);Mt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Kg(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ps(t){return TT({timestamp:Kg(t)})}function Yg(t,e,n,i,r){t.dataUpdateCount++;const s=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Lo(n,c=>Ne(c));o=yT(t.serverSyncTree_,s,l,r)}else{const l=Ne(n);o=vT(t.serverSyncTree_,s,l,r)}else if(i){const l=Lo(n,c=>Ne(c));o=gT(t.serverSyncTree_,s,l)}else{const l=Ne(n);o=Is(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Cr(t,s)),Mt(t.eventQueue_,a,o)}function Qg(t,e){_u(t,"connected",e),e===!1&&HT(t)}function WT(t,e){ze(e,(n,i)=>{_u(t,n,i)})}function _u(t,e,n){const i=new ve("/.info/"+e),r=Ne(n);t.infoData_.updateSnapshot(i,r);const s=Is(t.infoSyncTree_,i,r);Mt(t.eventQueue_,i,s)}function pa(t){return t.nextWriteId_++}function $T(t,e){const n=wT(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(i=>{const r=Ne(i).withIndex(e._queryParams.getIndex()),s=Is(t.serverSyncTree_,e._path,r);return gu(t.eventQueue_,e._path,s),Promise.resolve(r)},i=>(Ir(t,"get for query "+Ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function mu(t,e,n,i,r){Ir(t,"set",{path:e.toString(),value:n,priority:i});const s=Ps(t),o=Ne(n,i),a=aa(t.serverSyncTree_,e),l=lu(o,a,s),c=pa(t),u=tu(t.serverSyncTree_,e,l,c,!0);fa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||lt("set at "+e+" failed: "+h);const C=Kn(t.serverSyncTree_,c,!_);Mt(t.eventQueue_,e,C),Yn(t,r,h,p)});const d=wu(t,e);Cr(t,d),Mt(t.eventQueue_,d,[])}function jT(t,e,n,i){Ir(t,"update",{path:e.toString(),value:n});let r=!0;const s=Ps(t),o={};if(ze(n,(a,l)=>{r=!1,o[a]=Bg(Oe(e,a),Ne(l),t.serverSyncTree_,s)}),r)qe("update() called with empty data.  Don't do anything."),Yn(t,i,"ok",void 0);else{const a=pa(t),l=pT(t.serverSyncTree_,e,o,a);fa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||lt("update at "+e+" failed: "+c);const h=Kn(t.serverSyncTree_,a,!d),p=h.length>0?Cr(t,e):e;Mt(t.eventQueue_,p,h),Yn(t,i,c,u)}),ze(n,c=>{const u=wu(t,Oe(e,c));Cr(t,u)}),Mt(t.eventQueue_,e,[])}}function HT(t){Ir(t,"onDisconnectEvents");const e=Ps(t),n=Qo();Wc(t.onDisconnect_,me(),(r,s)=>{const o=Bg(r,s,t.serverSyncTree_,e);yr(n,r,o)});let i=[];Wc(n,me(),(r,s)=>{i=i.concat(Is(t.serverSyncTree_,r,s));const o=wu(t,r);Cr(t,o)}),t.onDisconnect_=Qo(),Mt(t.eventQueue_,me(),i)}function qT(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Bc(t.onDisconnect_,e),Yn(t,n,i,r)})}function Jg(t,e,n,i){const r=Ne(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&yr(t.onDisconnect_,e,r),Yn(t,i,s,o)})}function zT(t,e,n,i,r){const s=Ne(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&yr(t.onDisconnect_,e,s),Yn(t,r,o,a)})}function GT(t,e,n,i){if(Mo(n)){qe("onDisconnect().update() called with empty data.  Don't do anything."),Yn(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&ze(n,(o,a)=>{const l=Ne(a);yr(t.onDisconnect_,Oe(e,o),l)}),Yn(t,i,r,s)})}function KT(t,e,n){let i;se(e._path)===".info"?i=Lg(t.infoSyncTree_,e,n):i=Lg(t.serverSyncTree_,e,n),gu(t.eventQueue_,e._path,i)}function vu(t,e,n){let i;se(e._path)===".info"?i=nu(t.infoSyncTree_,e,n):i=nu(t.serverSyncTree_,e,n),gu(t.eventQueue_,e._path,i)}function Xg(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gg)}function YT(t){t.persistentConnection_&&t.persistentConnection_.resume(Gg)}function Ir(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function Yn(t,e,n,i){e&&fr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function QT(t,e,n,i,r,s){Ir(t,"transaction on "+e);const o={path:e,update:n,onComplete:i,status:null,order:gp(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=yu(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Rs("transaction failed: Data returned ",l,o.path),o.status=0;const c=ua(t.transactionQueueTree_,e),u=Oi(c)||[];u.push(o),du(c,u);let d;typeof l=="object"&&l!==null&&Ct(l,".priority")?(d=wi(l,".priority"),O(Ss(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(aa(t.serverSyncTree_,e)||X.EMPTY_NODE).getPriority().val();const h=Ps(t),p=Ne(l,d),_=lu(p,a,h);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=_,o.currentWriteId=pa(t);const C=tu(t.serverSyncTree_,e,_,o.currentWriteId,o.applyLocally);Mt(t.eventQueue_,e,C),ga(t,t.transactionQueueTree_)}}function yu(t,e,n){return aa(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function ga(t,e=t.transactionQueueTree_){if(e||_a(t,e),Oi(e)){const n=e_(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&JT(t,Ts(e),n)}else Wg(e)&&da(e,n=>{ga(t,n)})}function JT(t,e,n){const i=n.map(c=>c.currentWriteId),r=yu(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ct(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ir(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Kn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_a(t,ua(t.transactionQueueTree_,e)),ga(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)fr(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{lt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Cr(t,e)}},o)}function Cr(t,e){const n=Zg(t,e),i=Ts(n),r=e_(t,n);return XT(t,r,i),i}function XT(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ct(n,l.path);let u=!1,d;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=UT)u=!0,d="maxretry",r=r.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=yu(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Rs("transaction failed: Data returned ",p,l.path);let _=Ne(p);typeof p=="object"&&p!=null&&Ct(p,".priority")||(_=_.updatePriority(h.getPriority()));const w=l.currentWriteId,y=Ps(t),E=lu(_,h,y);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=E,l.currentWriteId=pa(t),o.splice(o.indexOf(w),1),r=r.concat(tu(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(Kn(t.serverSyncTree_,w,!0))}else u=!0,d="nodata",r=r.concat(Kn(t.serverSyncTree_,l.currentWriteId,!0))}Mt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}_a(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)fr(i[a]);ga(t,t.transactionQueueTree_)}function Zg(t,e){let n,i=t.transactionQueueTree_;for(n=se(e);n!==null&&Oi(i)===void 0;)i=ua(i,n),e=Ie(e),n=se(e);return i}function e_(t,e){const n=[];return t_(t,e,n),n.sort((i,r)=>i.order-r.order),n}function t_(t,e,n){const i=Oi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);da(e,r=>{t_(t,r,n)})}function _a(t,e){const n=Oi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,du(e,n.length>0?n:void 0)}da(e,i=>{_a(t,i)})}function wu(t,e){const n=Ts(Zg(t,e)),i=ua(t.transactionQueueTree_,e);return kT(i,r=>{bu(t,r)}),bu(t,i),$g(i,r=>{bu(t,r)}),n}function bu(t,e){const n=Oi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?du(e,void 0):n.length=s+1,Mt(t.eventQueue_,Ts(e),r);for(let o=0;o<i.length;o++)fr(i[o])}}/**
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
 */function ZT(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(s){}e+="/"+r}return e}function eS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):lt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eu=function(t,e){const n=tS(t),i=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lI();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pp(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new ve(n.pathString)}},tS=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=ZT(t.substring(u,d)));const h=eS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class n_{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class i_{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class r_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nS{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new pt;return qT(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){xt("OnDisconnect.remove",this._path);const e=new pt;return Jg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){xt("OnDisconnect.set",this._path),on("OnDisconnect.set",e,this._path,!1);const n=new pt;return Jg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){xt("OnDisconnect.setWithPriority",this._path),on("OnDisconnect.setWithPriority",e,this._path,!1),pu("OnDisconnect.setWithPriority",n,!1);const i=new pt;return zT(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){xt("OnDisconnect.update",this._path),Hg("OnDisconnect.update",e,this._path,!1);const n=new pt;return GT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class mt{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return oe(this._path)?null:Ac(this._path)}get ref(){return new Lt(this._repo,this._path)}get _queryIdentifier(){const e=ug(this._queryParams),n=vc(e);return n==="{}"?"default":n}get _queryObject(){return ug(this._queryParams)}isEqual(e){if(e=K(e),!(e instanceof mt))return!1;const n=this._repo===e._repo,i=kc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+HI(this._path)}}function ma(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Qn(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===sn){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==yn)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==rn)throw new Error(i);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===Te){if(e!=null&&!Ss(e)||n!=null&&!Ss(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof Mc||t.getIndex()===Lc,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function va(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Lt extends mt{constructor(e,n){super(e,n,new Go,!1)}get parent(){const e=Kp(this._path);return e===null?null:new Lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ni{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),i=xi(this.ref,e);return new Ni(this._node.getChild(n),i,Te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Ni(r,xi(this.ref,i),Te)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function s_(t,e){return t=K(t),t._checkNotDeleted("ref"),e!==void 0?xi(t._root,e):t._root}function o_(t,e){t=K(t),t._checkNotDeleted("refFromURL");const n=Eu(e,t._repo.repoInfo_.nodeAdmin);qg("refFromURL",n);const i=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&i.host!==t._repo.repoInfo_.host&&nn("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+t._repo.repoInfo_.host+")"),s_(t,n.path.toString())}function xi(t,e){return t=K(t),se(t._path)===null?LT("child","path",e,!1):ks("child","path",e,!1),new Lt(t._repo,Oe(t._path,e))}function iS(t,e){t=K(t),xt("push",t._path),on("push",e,t._path,!0);const n=Kg(t._repo),i=dC(n),r=xi(t,i),s=xi(t,i);let o;return e!=null?o=Iu(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function rS(t){return xt("remove",t._path),Iu(t,null)}function Iu(t,e){t=K(t),xt("set",t._path),on("set",e,t._path,!1);const n=new pt;return mu(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function sS(t,e){t=K(t),xt("setPriority",t._path),pu("setPriority",e,!1);const n=new pt;return mu(t._repo,Oe(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function oS(t,e,n){if(xt("setWithPriority",t._path),on("setWithPriority",e,t._path,!1),pu("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const i=new pt;return mu(t._repo,t._path,e,n,i.wrapCallback(()=>{})),i.promise}function aS(t,e){Hg("update",e,t._path,!1);const n=new pt;return jT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function lS(t){return t=K(t),$T(t._repo,t).then(e=>new Ni(e,new Lt(t._repo,t._path),t._queryParams.getIndex()))}class ya{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new n_("value",this,new Ni(e.snapshotNode,new Lt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new i_(this,e,n):null}matches(e){return e instanceof ya?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wa{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new i_(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const i=xi(new Lt(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new n_(e.type,this,new Ni(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wa?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Os(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,d)=>{vu(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new r_(n,s||void 0),a=e==="value"?new ya(o):new wa(e,o);return KT(t._repo,t,a),()=>vu(t._repo,t,a)}function Cu(t,e,n,i){return Os(t,"value",e,n,i)}function a_(t,e,n,i){return Os(t,"child_added",e,n,i)}function l_(t,e,n,i){return Os(t,"child_changed",e,n,i)}function c_(t,e,n,i){return Os(t,"child_moved",e,n,i)}function u_(t,e,n,i){return Os(t,"child_removed",e,n,i)}function d_(t,e,n){let i=null;const r=n?new r_(n):null;e==="value"?i=new ya(r):e&&(i=new wa(e,r)),vu(t._repo,t,i)}class qt{}class h_ extends qt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){on("endAt",this._value,e._path,!0);const n=Vc(e._queryParams,this._value,this._key);if(va(n),Qn(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mt(e._repo,e._path,n,e._orderByCalled)}}function cS(t,e){return As("endAt","key",e,!0),new h_(t,e)}class uS extends qt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){on("endBefore",this._value,e._path,!1);const n=vC(e._queryParams,this._value,this._key);if(va(n),Qn(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mt(e._repo,e._path,n,e._orderByCalled)}}function dS(t,e){return As("endBefore","key",e,!0),new uS(t,e)}class f_ extends qt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){on("startAt",this._value,e._path,!0);const n=Uc(e._queryParams,this._value,this._key);if(va(n),Qn(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new mt(e._repo,e._path,n,e._orderByCalled)}}function hS(t=null,e){return As("startAt","key",e,!0),new f_(t,e)}class fS extends qt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){on("startAfter",this._value,e._path,!1);const n=mC(e._queryParams,this._value,this._key);if(va(n),Qn(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new mt(e._repo,e._path,n,e._orderByCalled)}}function pS(t,e){return As("startAfter","key",e,!0),new fS(t,e)}class gS extends qt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new mt(e._repo,e._path,gC(e._queryParams,this._limit),e._orderByCalled)}}function _S(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new gS(t)}class mS extends qt{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new mt(e._repo,e._path,_C(e._queryParams,this._limit),e._orderByCalled)}}function vS(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new mS(t)}class yS extends qt{constructor(e){super();this._path=e}_apply(e){ma(e,"orderByChild");const n=new ve(this._path);if(oe(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Mc(n),r=Ko(e._queryParams,i);return Qn(r),new mt(e._repo,e._path,r,!0)}}function wS(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ks("orderByChild","path",t,!1),new yS(t)}class bS extends qt{_apply(e){ma(e,"orderByKey");const n=Ko(e._queryParams,sn);return Qn(n),new mt(e._repo,e._path,n,!0)}}function ES(){return new bS}class IS extends qt{_apply(e){ma(e,"orderByPriority");const n=Ko(e._queryParams,Te);return Qn(n),new mt(e._repo,e._path,n,!0)}}function CS(){return new IS}class TS extends qt{_apply(e){ma(e,"orderByValue");const n=Ko(e._queryParams,Lc);return Qn(n),new mt(e._repo,e._path,n,!0)}}function SS(){return new TS}class RS extends qt{constructor(e,n){super();this._value=e,this._key=n}_apply(e){if(on("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new h_(this._value,this._key)._apply(new f_(this._value,this._key)._apply(e))}}function AS(t,e){return As("equalTo","key",e,!0),new RS(t,e)}function zt(t,...e){let n=K(t);for(const i of e)n=i._apply(n);return n}oT(Lt);dT(Lt);/**
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
 */const kS="FIREBASE_DATABASE_EMULATOR_HOST",Tu={};let PS=!1;function OS(t,e,n,i){t.repoInfo_=new Pp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),i&&(t.authTokenProvider_=i)}function p_(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eu(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c=process.env[kS]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Eu(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new pr(pr.OWNER):new mI(t.name,t.options,e);qg("Invalid Firebase Database URL",o),oe(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=xS(a,t,u,new _I(t.name,n));return new MS(d,t)}function NS(t,e){const n=Tu[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Xg(t),delete n[t.key]}function xS(t,e,n,i){let r=Tu[e.name];r||(r={},Tu[e.name]=r);let s=r[t.toURLString()];return s&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VT(t,PS,n,i),r[t.toURLString()]=s,s}class MS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lt(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function LS(t,e,n,i={}){t=K(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nn("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new pr(pr.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:jf(i.mockUserToken,t.app.options.projectId);s=new pr(o)}OS(r,e,n,s)}function DS(t){t=K(t),t._checkNotDeleted("goOffline"),Xg(t._repo)}function FS(t){t=K(t),t._checkNotDeleted("goOnline"),YT(t._repo)}function US(t,e){vp(t,e)}/**
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
 */function VS(t){fp(Wn),Bn(new Ot("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return p_(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),$n(rI,sI,t)}/**
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
 */const BS={".sv":"timestamp"};function WS(){return BS}function $S(t){return{".sv":{increment:t}}}/**
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
 */class jS{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function HS(t,e,n){var i;if(t=K(t),xt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(i=n==null?void 0:n.applyLocally)!==null&&i!==void 0?i:!0,s=new pt,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new Ni(u,new Lt(t._repo,t._path),Te),s.resolve(new jS(c,d)))},a=Cu(t,()=>{});return QT(t._repo,t._path,e,o,a,r),s.promise}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};VS();const qS="@firebase/database-compat",zS="0.1.1";/**
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
 */const GS=new ss("@firebase/database-compat"),g_=function(t){const e="FIREBASE WARNING: "+t;GS.warn(e)};/**
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
 */const KS=function(t,e,n,i){if(!(i&&n===void 0)&&typeof n!="boolean")throw new Error(gt(t,e)+"must be a boolean.")},YS=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(gt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class QS{constructor(e){this._delegate=e}cancel(e){Z("OnDisconnect.cancel",0,1,arguments.length),He("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),i=>e(i)),n}remove(e){Z("OnDisconnect.remove",0,1,arguments.length),He("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),i=>e(i)),n}set(e,n){Z("OnDisconnect.set",1,2,arguments.length),He("OnDisconnect.set","onComplete",n,!0);const i=this._delegate.set(e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){Z("OnDisconnect.setWithPriority",2,3,arguments.length),He("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,n);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,n){if(Z("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,g_("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}He("OnDisconnect.update","onComplete",n,!0);const i=this._delegate.update(e);return n&&i.then(()=>n(null),r=>n(r)),i}}/**
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
 */class JS{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return Z("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Jn{constructor(e,n){this._database=e,this._delegate=n}val(){return Z("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Z("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Z("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Z("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Z("DataSnapshot.child",0,1,arguments.length),e=String(e),ks("DataSnapshot.child","path",e,!1),new Jn(this._database,this._delegate.child(e))}hasChild(e){return Z("DataSnapshot.hasChild",1,1,arguments.length),ks("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Z("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Z("DataSnapshot.forEach",1,1,arguments.length),He("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Jn(this._database,n)))}hasChildren(){return Z("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Z("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Z("DataSnapshot.ref",0,0,arguments.length),new Tt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Ze{constructor(e,n){this.database=e,this._delegate=n}on(e,n,i,r){var s;Z("Query.on",2,4,arguments.length),He("Query.on","callback",n,!1);const o=Ze.getCancelAndContextArgs_("Query.on",i,r),a=(c,u)=>{n.call(o.context,new Jn(this.database,c),u)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return Cu(this._delegate,a,l),n;case"child_added":return a_(this._delegate,a,l),n;case"child_removed":return u_(this._delegate,a,l),n;case"child_changed":return l_(this._delegate,a,l),n;case"child_moved":return c_(this._delegate,a,l),n;default:throw new Error(gt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,i){if(Z("Query.off",0,3,arguments.length),YS("Query.off",e,!0),He("Query.off","callback",n,!0),Jf("Query.off","context",i,!0),n){const r=()=>{};r.userCallback=n,r.context=i,d_(this._delegate,e,r)}else d_(this._delegate,e)}get(){return lS(this._delegate).then(e=>new Jn(this.database,e))}once(e,n,i,r){Z("Query.once",1,4,arguments.length),He("Query.once","callback",n,!0);const s=Ze.getCancelAndContextArgs_("Query.once",i,r),o=new pt,a=(c,u)=>{const d=new Jn(this.database,c);n&&n.call(s.context,d,u),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":Cu(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":a_(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":u_(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":l_(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":c_(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(gt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return Z("Query.limitToFirst",1,1,arguments.length),new Ze(this.database,zt(this._delegate,_S(e)))}limitToLast(e){return Z("Query.limitToLast",1,1,arguments.length),new Ze(this.database,zt(this._delegate,vS(e)))}orderByChild(e){return Z("Query.orderByChild",1,1,arguments.length),new Ze(this.database,zt(this._delegate,wS(e)))}orderByKey(){return Z("Query.orderByKey",0,0,arguments.length),new Ze(this.database,zt(this._delegate,ES()))}orderByPriority(){return Z("Query.orderByPriority",0,0,arguments.length),new Ze(this.database,zt(this._delegate,CS()))}orderByValue(){return Z("Query.orderByValue",0,0,arguments.length),new Ze(this.database,zt(this._delegate,SS()))}startAt(e=null,n){return Z("Query.startAt",0,2,arguments.length),new Ze(this.database,zt(this._delegate,hS(e,n)))}startAfter(e=null,n){return Z("Query.startAfter",0,2,arguments.length),new Ze(this.database,zt(this._delegate,pS(e,n)))}endAt(e=null,n){return Z("Query.endAt",0,2,arguments.length),new Ze(this.database,zt(this._delegate,cS(e,n)))}endBefore(e=null,n){return Z("Query.endBefore",0,2,arguments.length),new Ze(this.database,zt(this._delegate,dS(e,n)))}equalTo(e,n){return Z("Query.equalTo",1,2,arguments.length),new Ze(this.database,zt(this._delegate,AS(e,n)))}toString(){return Z("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Z("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Z("Query.isEqual",1,1,arguments.length),!(e instanceof Ze)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,i){const r={cancel:void 0,context:void 0};if(n&&i)r.cancel=n,He(e,"cancel",r.cancel,!0),r.context=i,Jf(e,"context",r.context,!0);else if(n)if(typeof n=="object"&&n!==null)r.context=n;else if(typeof n=="function")r.cancel=n;else throw new Error(gt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Tt(this.database,new Lt(this._delegate._repo,this._delegate._path))}}class Tt extends Ze{constructor(e,n){super(e,new mt(n._repo,n._path,new Go,!1));this.database=e,this._delegate=n}getKey(){return Z("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Z("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Tt(this.database,xi(this._delegate,e))}getParent(){Z("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Tt(this.database,e):null}getRoot(){return Z("Reference.root",0,0,arguments.length),new Tt(this.database,this._delegate.root)}set(e,n){Z("Reference.set",1,2,arguments.length),He("Reference.set","onComplete",n,!0);const i=Iu(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}update(e,n){if(Z("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,g_("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}xt("Reference.update",this._delegate._path),He("Reference.update","onComplete",n,!0);const i=aS(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){Z("Reference.setWithPriority",2,3,arguments.length),He("Reference.setWithPriority","onComplete",i,!0);const r=oS(this._delegate,e,n);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){Z("Reference.remove",0,1,arguments.length),He("Reference.remove","onComplete",e,!0);const n=rS(this._delegate);return e&&n.then(()=>e(null),i=>e(i)),n}transaction(e,n,i){Z("Reference.transaction",1,3,arguments.length),He("Reference.transaction","transactionUpdate",e,!1),He("Reference.transaction","onComplete",n,!0),KS("Reference.transaction","applyLocally",i,!0);const r=HS(this._delegate,e,{applyLocally:i}).then(s=>new JS(s.committed,new Jn(this.database,s.snapshot)));return n&&r.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),r}setPriority(e,n){Z("Reference.setPriority",1,2,arguments.length),He("Reference.setPriority","onComplete",n,!0);const i=sS(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}push(e,n){Z("Reference.push",0,2,arguments.length),He("Reference.push","onComplete",n,!0);const i=iS(this._delegate,e),r=i.then(o=>new Tt(this.database,o));n&&r.then(()=>n(null),o=>n(o));const s=new Tt(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return xt("Reference.onDisconnect",this._delegate._path),new QS(new nS(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class Ns{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,n,i={}){LS(this._delegate,e,n,i)}ref(e){if(Z("database.ref",0,1,arguments.length),e instanceof Tt){const n=o_(this._delegate,e.toString());return new Tt(this,n)}else{const n=s_(this._delegate,e);return new Tt(this,n)}}refFromURL(e){Z("database.refFromURL",1,1,arguments.length);const i=o_(this._delegate,e);return new Tt(this,i)}goOffline(){return Z("database.goOffline",0,0,arguments.length),DS(this._delegate)}goOnline(){return Z("database.goOnline",0,0,arguments.length),FS(this._delegate)}}Ns.ServerValue={TIMESTAMP:WS(),increment:t=>$S(t)};/**
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
 */function XS({app:t,url:e,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){fp(n);const o=new Zf("auth-internal",new ep("database-standalone"));return o.setComponent(new Ot("auth-internal",()=>i,"PRIVATE")),{instance:new Ns(p_(t,o,void 0,e,s),t),namespace:r}}var ZS=Object.freeze({__proto__:null,initStandalone:XS});/**
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
 */const eR=Ns.ServerValue;function tR(t){t.INTERNAL.registerComponent(new Ot("database-compat",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:n});return new Ns(r,i)},"PUBLIC").setServiceProps({Reference:Tt,Query:Ze,Database:Ns,DataSnapshot:Jn,enableLogging:US,INTERNAL:ZS,ServerValue:eR}).setMultipleInstances(!0)),t.registerVersion(qS,zS)}tR(dr);const xs={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Tr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function nR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function __(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iR=nR,rR=__,m_=new yi("auth","Firebase",__());/**
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
 */const v_=new ss("@firebase/auth");function ba(t,...e){v_.logLevel<=we.ERROR&&v_.error(`Auth (${Wn}): ${t}`,...e)}/**
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
 */function et(t,...e){throw Su(t,...e)}function tt(t,...e){return Su(t,...e)}function y_(t,e,n){const i=Object.assign(Object.assign({},rR()),{[e]:n});return new yi("auth","Firebase",i).create(e,{appName:t.name})}function Sr(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&et(t,"argument-error"),y_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Su(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return m_.create(t,...e)}function N(t,e,...n){if(!t)throw Su(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Gt(t,e){t||an(e)}/**
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
 */const w_=new Map;function St(t){Gt(t instanceof Function,"Expected a class definition");let e=w_.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w_.set(t,e),e)}function sR(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(St);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ms(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ru(){return b_()==="http:"||b_()==="https:"}function b_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ru()||qf()||"connection"in navigator)?navigator.onLine:!0}function aR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=lc()||xo()}get(){return oR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Au(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ku{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cR=new Ls(3e4,6e4);function Be(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ye(t,e,n,i,r={}){return E_(t,r,()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=bi(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(ku.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),ku.fetch()(I_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function E_(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},lR),e);try{const r=new uR(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw y_(t,u,c);et(t,u)}}catch(r){if(r instanceof It)throw r;et(t,"network-request-failed")}}async function En(t,e,n,i,r={}){const s=await Ye(t,e,n,i,r);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{serverResponse:s}),s}function I_(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Au(t.config,r):`${t.config.apiScheme}://${r}`}class uR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(tt(this.auth,"timeout")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=tt(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function dR(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function hR(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function fR(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ds(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function pR(t,e=!1){const n=K(t),i=await n.getIdToken(e),r=Ia(i);N(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ds(Pu(r.auth_time)),issuedAtTime:Ds(Pu(r.iat)),expirationTime:Ds(Pu(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Pu(t){return Number(t)*1e3}function Ia(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const r=ac(n);return r?JSON.parse(r):(ba("Failed to decode base64 JWT payload"),null)}catch(r){return ba("Caught error parsing JWT payload as JSON",r),null}}function gR(t){const e=Ia(t);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function In(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof It&&_R(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _R({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class C_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(t){var e;const n=t.auth,i=await t.getIdToken(),r=await In(t,fR(n,{idToken:i}));N(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?wR(s.providerUserInfo):[],a=yR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new C_(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function vR(t){const e=K(t);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yR(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function wR(t){return t.map(e=>{var{providerId:n}=e,i=hc(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function bR(t,e){const n=await E_(t,{},()=>{const i=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=I_(t,r,"/v1/token",`key=${s}`);return ku.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await bR(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Us;return i&&(N(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(N(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
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
 */function Xn(t,e){N(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Mi{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=hc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new mR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new C_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await In(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pR(this,e)}reload(){return vR(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Fs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await In(this,dR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:R,isAnonymous:B,providerData:Y,stsTokenManager:j}=n;N(k&&j,e,"internal-error");const ee=Us.fromJSON(this.name,j);N(typeof k=="string",e,"internal-error"),Xn(d,e.name),Xn(h,e.name),N(typeof R=="boolean",e,"internal-error"),N(typeof B=="boolean",e,"internal-error"),Xn(p,e.name),Xn(_,e.name),Xn(C,e.name),Xn(w,e.name),Xn(y,e.name),Xn(E,e.name);const $=new Mi({uid:k,auth:e,email:h,emailVerified:R,displayName:d,isAnonymous:B,photoURL:_,phoneNumber:p,tenantId:C,stsTokenManager:ee,createdAt:y,lastLoginAt:E});return Y&&Array.isArray(Y)&&($.providerData=Y.map(ie=>Object.assign({},ie))),w&&($._redirectEventId=w),$}static async _fromIdTokenResponse(e,n,i=!1){const r=new Us;r.updateFromServerResponse(n);const s=new Mi({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Fs(s),s}}/**
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
 */class T_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T_.type="NONE";const Vs=T_;/**
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
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Li(this.userKey,r.apiKey,s),this.fullPersistenceKey=Li("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Rr(St(Vs),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||St(Vs);const o=Li(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Mi._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch(u){}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rr(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch(u){}})),new Rr(s,e,i))}}/**
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
 */function S_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(R_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(P_(e))return"Blackberry";if(O_(e))return"Webos";if(Ou(e))return"Safari";if((e.includes("chrome/")||A_(e))&&!e.includes("edge/"))return"Chrome";if(Bs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function R_(t=De()){return/firefox\//i.test(t)}function Ou(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function A_(t=De()){return/crios\//i.test(t)}function k_(t=De()){return/iemobile/i.test(t)}function Bs(t=De()){return/android/i.test(t)}function P_(t=De()){return/blackberry/i.test(t)}function O_(t=De()){return/webos/i.test(t)}function Ar(t=De()){return/iphone|ipad|ipod/i.test(t)}function ER(t=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function IR(t=De()){var e;return Ar(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function CR(){return zf()&&document.documentMode===10}function N_(t=De()){return Ar(t)||Bs(t)||O_(t)||P_(t)||/windows phone/i.test(t)||k_(t)}function TR(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function x_(t,e=[]){let n;switch(t){case"Browser":n=S_(De());break;case"Worker":n=`${S_(De())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${i}`}/**
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
 */class SR{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new M_(this),this.idTokenSubscription=new M_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=St(n)),this._initializationPromise=this.queue(async()=>{var i;this._deleted||(this.persistenceManager=await Rr.create(this,e),!this._deleted&&(((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?K(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&St(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[St(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Qe(t){return K(t)}class M_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qf(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function RR(t,e,n){const i=Qe(t);N(i._canInitEmulator,i,"emulator-config-failed"),N(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n==null?void 0:n.disableWarnings),s=L_(e),{host:o,port:a}=AR(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||kR()}function L_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function AR(t){const e=L_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:D_(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:D_(o)}}}function D_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
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
 */async function F_(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",Be(t,e))}async function U_(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function PR(t,e){return Ye(t,"POST","/v1/accounts:update",Be(t,e))}/**
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
 */async function OR(t,e){return En(t,"POST","/v1/accounts:signInWithPassword",Be(t,e))}async function Ca(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",Be(t,e))}async function NR(t,e){return Ca(t,e)}async function xR(t,e){return Ca(t,e)}async function MR(t,e){return Ca(t,e)}async function LR(t,e){return Ca(t,e)}/**
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
 */async function DR(t,e){return En(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}async function FR(t,e){return En(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}/**
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
 */class Ws extends kr{constructor(e,n,i,r=null){super("password",i);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Ws(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Ws(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return OR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DR(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return U_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return FR(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cn(t,e){return En(t,"POST","/v1/accounts:signInWithIdp",Be(t,e))}/**
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
 */const UR="http://localhost";class ln extends kr{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=hc(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ln(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Cn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:UR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */async function VR(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",Be(t,e))}async function BR(t,e){return En(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e))}async function WR(t,e){const n=await En(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e));if(n.temporaryProof)throw Ea(t,"account-exists-with-different-credential",n);return n}const $R={USER_NOT_FOUND:"user-not-found"};async function jR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return En(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,n),$R)}/**
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
 */class Di extends kr{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Di({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Di({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return BR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return WR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return jR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Di({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function HR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qR(t){const e=ur(rs(t)).link,n=e?ur(rs(e)).deep_link_id:null,i=ur(rs(t)).deep_link_id;return(i?ur(rs(i)).link:null)||i||n||e||t}class Ta{constructor(e){var n,i,r,s,o,a;const l=ur(rs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=HR((r=l.mode)!==null&&r!==void 0?r:null);N(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qR(e);try{return new Ta(n)}catch(i){return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,n){return Ws._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ta.parseLink(n);return N(i,"argument-error"),Ws._fromEmailAndCode(e,i.code,i.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pr extends ei{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Or extends Pr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),ln._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),ln._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Or.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Or.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new Or(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch(l){return null}}}/**
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
 */class cn extends Pr{constructor(){super("facebook.com")}static credential(e){return ln._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch(n){return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class un extends Pr{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ln._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return un.credential(n,i)}catch(r){return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class dn extends Pr{constructor(){super("github.com")}static credential(e){return ln._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch(n){return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */const zR="http://localhost";class Sa extends kr{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Cn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new Sa(i,s)}static _create(e,n){return new Sa(e,n)}buildRequest(){return{requestUri:zR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class hn extends Pr{constructor(){super("twitter.com")}static credential(e,n){return ln._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return hn.credential(n,i)}catch(r){return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function V_(t,e){return En(t,"POST","/v1/accounts:signUp",Be(t,e))}/**
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
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Mi._fromIdTokenResponse(e,i,r),o=B_(i);return new Dt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=B_(i);return new Dt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function B_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function GR(t){var e;const n=Qe(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new Dt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await V_(n,{returnSecureToken:!0}),r=await Dt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
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
 */class Ra extends It{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ra.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,i,r){return new Ra(e,n,i,r)}}function W_(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,s,e,i):s})}/**
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
 */function $_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function KR(t,e){const n=K(t);await Aa(!0,n,e);const{providerUserInfo:i}=await hR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=$_(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nu(t,e,n=!1){const i=await In(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",i)}async function Aa(t,e,n){await Fs(e);const i=$_(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";N(i.has(n)===t,e.auth,r)}/**
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
 */async function j_(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await In(t,W_(i,r,e,t),n);N(s.idToken,i,"internal-error");const o=Ia(s.idToken);N(o,i,"internal-error");const{sub:a}=o;return N(t.uid===a,i,"user-mismatch"),Dt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(i,"user-mismatch"),s}}/**
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
 */async function H_(t,e,n=!1){const i="signIn",r=await W_(t,i,e),s=await Dt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ka(t,e){return H_(Qe(t),e)}async function q_(t,e){const n=K(t);return await Aa(!1,n,e.providerId),Nu(n,e)}async function z_(t,e){return j_(K(t),e)}/**
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
 */async function YR(t,e){return En(t,"POST","/v1/accounts:signInWithCustomToken",Be(t,e))}/**
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
 */async function QR(t,e){const n=Qe(t),i=await YR(n,{token:e,returnSecureToken:!0}),r=await Dt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */class Pa{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?xu._fromServerResponse(e,n):et(e,"internal-error")}}class xu extends Pa{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new xu(n)}}/**
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
 */function Oa(t,e,n){var i;N(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function JR(t,e,n){const i=K(t),r={requestType:"PASSWORD_RESET",email:e};n&&Oa(i,r,n),await xR(i,r)}async function XR(t,e,n){await F_(K(t),{oobCode:e,newPassword:n})}async function ZR(t,e){await PR(K(t),{oobCode:e})}async function G_(t,e){const n=K(t),i=await F_(n,{oobCode:e}),r=i.requestType;switch(N(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(i.mfaInfo,n,"internal-error");default:N(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Pa._fromServerResponse(Qe(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function e0(t,e){const{data:n}=await G_(K(t),e);return n.email}async function t0(t,e,n){const i=Qe(t),r=await V_(i,{returnSecureToken:!0,email:e,password:n}),s=await Dt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function n0(t,e,n){return ka(K(t),Zn.credential(e,n))}/**
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
 */async function i0(t,e,n){const i=K(t),r={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,i,"argument-error"),n&&Oa(i,r,n),await MR(i,r)}function r0(t,e){const n=Ta.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function s0(t,e,n){const i=K(t),r=Zn.credentialWithLink(e,n||Ms());return N(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),ka(i,r)}/**
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
 */async function o0(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",Be(t,e))}/**
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
 */async function a0(t,e){const n=Ru()?Ms():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await o0(K(t),i);return r||[]}async function l0(t,e){const n=K(t),i=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&Oa(n.auth,r,e);const{email:s}=await NR(n.auth,r);s!==t.email&&await t.reload()}async function c0(t,e,n){const i=K(t),r=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&Oa(i.auth,s,n);const{email:o}=await LR(i.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function u0(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
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
 */async function d0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=K(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await In(i,u0(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function h0(t,e){return K_(K(t),e,null)}function f0(t,e){return K_(K(t),null,e)}async function K_(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await In(t,U_(i,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function p0(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t==null?void 0:t.idToken)){const o=(n=(e=Ia(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Nr(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new g0(s,r);case"github.com":return new _0(s,r);case"google.com":return new m0(s,r);case"twitter.com":return new v0(s,r,t.screenName||null);case"custom":case"anonymous":return new Nr(s,null);default:return new Nr(s,i,r)}}class Nr{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class Y_ extends Nr{constructor(e,n,i,r){super(e,n,i);this.username=r}}class g0 extends Nr{constructor(e,n){super(e,"facebook.com",n)}}class _0 extends Y_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class m0 extends Nr{constructor(e,n){super(e,"google.com",n)}}class v0 extends Y_{constructor(e,n,i){super(e,"twitter.com",n,i)}}function y0(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:p0(n)}class Fi{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Fi("enroll",e)}static _fromMfaPendingCredential(e){return new Fi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Fi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((i=e.multiFactorSession)===null||i===void 0?void 0:i.idToken)return Fi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Mu{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=Qe(e),r=(n.serverResponse.mfaInfo||[]).map(o=>Pa._fromServerResponse(i,o));N(n.serverResponse.mfaPendingCredential,i,"internal-error");const s=Fi._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Mu(s,r,async o=>{const a=await o._process(i,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const l=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const c=await Dt._fromIdTokenResponse(i,n.operationType,l);return await i._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,i,"internal-error"),Dt._forOperation(n.user,n.operationType,l);default:et(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function w0(t,e){var n;const i=K(t),r=e;return N(e.operationType,i,"argument-error"),N((n=r.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),Mu._fromError(i,r)}/**
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
 */function b0(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",Be(t,e))}function E0(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:finalize",Be(t,e))}function I0(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Be(t,e))}class Lu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>Pa._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Lu(e)}async getSession(){return Fi._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const i=e,r=await this.getSession(),s=await In(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await In(this.user,I0(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Du=new WeakMap;function C0(t){const e=K(t);return Du.has(e)||Du.set(e,Lu._fromUser(e)),Du.get(e)}const Na="__sak";/**
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
 */class Q_{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function T0(){const t=De();return Ou(t)||Ar(t)}const S0=1e3,R0=10;class J_ extends Q_{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=T0()&&TR(),this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);CR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,R0):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const Fu=J_;/**
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
 */class X_ extends Q_{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Ui=X_;/**
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
 */function A0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new xa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await A0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
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
 */function $s(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=$s("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function P0(t){We().location.href=t}/**
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
 */function Uu(){return typeof We().WorkerGlobalScope!="undefined"&&typeof We().importScripts=="function"}async function O0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function N0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return Uu()?self:null}/**
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
 */const Z_="firebaseLocalStorageDb",M0=1,Ma="firebaseLocalStorage",em="fbase_key";class js{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function L0(){const t=indexedDB.deleteDatabase(Z_);return new js(t).toPromise()}function Vu(){const t=indexedDB.open(Z_,M0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ma,{keyPath:em})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ma)?e(i):(i.close(),await L0(),e(await Vu()))})})}async function tm(t,e,n){const i=La(t,!0).put({[em]:e,value:n});return new js(i).toPromise()}async function D0(t,e){const n=La(t,!1).get(e),i=await new js(n).toPromise();return i===void 0?null:i.value}function nm(t,e){const n=La(t,!0).delete(e);return new js(n).toPromise()}const F0=800,U0=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>U0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new k0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await tm(e,Na,"1"),await nm(e,Na),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>tm(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>D0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=La(r,!1).getAll();return new js(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const Da=im;/**
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
 */function V0(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",Be(t,e))}function B0(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:finalize",Be(t,e))}/**
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
 */async function W0(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function $0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rm(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=tt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",$0().appendChild(i)})}function sm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const j0=500,H0=6e4,Fa=1e12;class q0{constructor(e){this.auth=e,this.counter=Fa,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new z0(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||Fa;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||Fa;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||Fa;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class z0{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;N(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=G0(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch(i){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch(i){}this.isVisible&&this.execute()},H0)},j0))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function G0(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Bu=sm("rcb"),K0=new Ls(3e4,6e4),Y0="https://www.google.com/recaptcha/api.js?";class Q0{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!We().grecaptcha}load(e,n=""){return N(J0(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(We().grecaptcha):new Promise((i,r)=>{const s=We().setTimeout(()=>{r(tt(e,"network-request-failed"))},K0.get());We()[Bu]=()=>{We().clearTimeout(s),delete We()[Bu];const a=We().grecaptcha;if(!a){r(tt(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,i(a)};const o=`${Y0}?${bi({onload:Bu,render:"explicit",hl:n})}`;rm(o).catch(()=>{clearTimeout(s),r(tt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!We().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function J0(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class X0{async load(e){return new q0(e)}clearedOneInstance(){}}/**
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
 */const om="recaptcha",Z0={theme:"light",type:"image"};class eA{constructor(e,n=Object.assign({},Z0),i){this.parameters=n,this.type=om,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qe(i),this.isInvisible=this.parameters.size==="invisible",N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;N(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new X0:new Q0,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=We()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Ru()&&!Uu(),this.auth,"internal-error"),await tA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await W0(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function tA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Wu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Di._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function nA(t,e,n){const i=Qe(t),r=await Ua(i,e,K(n));return new Wu(r,s=>ka(i,s))}async function iA(t,e,n){const i=K(t);await Aa(!1,i,"phone");const r=await Ua(i.auth,e,K(n));return new Wu(r,s=>q_(i,s))}async function rA(t,e,n){const i=K(t),r=await Ua(i.auth,e,K(n));return new Wu(r,s=>z_(i,s))}async function Ua(t,e,n){var i;const r=await n.verify();try{N(typeof r=="string",t,"argument-error"),N(n.type===om,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await b0(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await V0(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await VR(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function sA(t,e){await Nu(K(t),e)}/**
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
 */class Kt{constructor(e){this.providerId=Kt.PROVIDER_ID,this.auth=Qe(e)}verifyPhoneNumber(e,n){return Ua(this.auth,e,K(n))}static credential(e,n){return Di._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Kt.credentialFromTaggedObject(n)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Di._fromTokenResponse(n,i):null}}Kt.PROVIDER_ID="phone";Kt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Vi(t,e){return e?St(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $u extends kr{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oA(t){return H_(t.auth,new $u(t),t.bypassAuthState)}function aA(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),j_(n,new $u(t),t.bypassAuthState)}async function lA(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),Nu(n,new $u(t),t.bypassAuthState)}/**
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
 */class am{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oA;case"linkViaPopup":case"linkViaRedirect":return lA;case"reauthViaPopup":case"reauthViaRedirect":return aA;default:et(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cA=new Ls(2e3,1e4);async function uA(t,e,n){const i=Qe(t);Sr(t,e,ei);const r=Vi(i,n);return new Tn(i,"signInViaPopup",e,r).executeNotNull()}async function dA(t,e,n){const i=K(t);Sr(i.auth,e,ei);const r=Vi(i.auth,n);return new Tn(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function hA(t,e,n){const i=K(t);Sr(i.auth,e,ei);const r=Vi(i.auth,n);return new Tn(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Tn extends am{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=$s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,cA.get())};e()}}Tn.currentPopupAction=null;/**
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
 */const fA="pendingRedirect",ju=new Map;class pA extends am{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=ju.get(this.auth._key());if(!e){try{const i=await gA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ju.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gA(t,e){const n=lm(e),i=await qu(t)._get(n)==="true";return await qu(t)._remove(n),i}async function Hu(t,e){return qu(t)._set(lm(e),"true")}function _A(){ju.clear()}function qu(t){return St(t._redirectPersistence)}function lm(t){return Li(fA,t.config.apiKey,t.name)}/**
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
 */function mA(t,e,n){return vA(t,e,n)}async function vA(t,e,n){const i=Qe(t);Sr(t,e,ei);const r=Vi(i,n);return await Hu(r,i),r._openRedirect(i,e,"signInViaRedirect")}function yA(t,e,n){return wA(t,e,n)}async function wA(t,e,n){const i=K(t);Sr(i.auth,e,ei);const r=Vi(i.auth,n);await Hu(r,i.auth);const s=await cm(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function bA(t,e,n){return EA(t,e,n)}async function EA(t,e,n){const i=K(t);Sr(i.auth,e,ei);const r=Vi(i.auth,n);await Aa(!1,i,e.providerId),await Hu(r,i.auth);const s=await cm(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function IA(t,e){return await Qe(t)._initializationPromise,Va(t,e,!1)}async function Va(t,e,n=!1){const i=Qe(t),r=Vi(i,e),o=await new pA(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function cm(t){const e=$s(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const CA=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hm(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hm(t);default:return!1}}/**
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
 */async function fm(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
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
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RA=/^https?/;async function AA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fm(t);for(const n of e)try{if(kA(n))return}catch(i){}et(t,"unauthorized-domain")}function kA(t){const e=Ms(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!RA.test(n))return!1;if(SA.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const PA=new Ls(3e4,6e4);function pm(){const t=We().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OA(t){return new Promise((e,n)=>{var i,r,s;function o(){pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pm(),n(tt(t,"network-request-failed"))},timeout:PA.get()})}if((r=(i=We().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=We().gapi)===null||s===void 0?void 0:s.load)o();else{const a=sm("iframefcb");return We()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},rm(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Ba=null,e})}let Ba=null;function NA(t){return Ba=Ba||OA(t),Ba}/**
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
 */const xA=new Ls(5e3,15e3),MA="__/auth/iframe",LA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},FA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UA(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Au(e,LA):`https://${t.config.authDomain}/${MA}`,i={apiKey:e.apiKey,appName:t.name,v:Wn},r=FA.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${bi(i).slice(1)}`}async function VA(t){const e=await NA(t),n=We().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:UA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=We().setTimeout(()=>{s(o)},xA.get());function l(){We().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const BA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WA=500,$A=600,jA="_blank",HA="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qA(t,e,n,i=WA,r=$A){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},BA),{width:i.toString(),height:r.toString(),top:s,left:o}),c=De().toLowerCase();n&&(a=A_(c)?jA:n),R_(c)&&(e=e||HA,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(IR(c)&&a!=="_self")return zA(e||"",a),new gm(null);const d=window.open(e||"",a,u);N(d,t,"popup-blocked");try{d.focus()}catch(h){}return new gm(d)}function zA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const GA="__/auth/handler",KA="emulator/auth/handler";function zu(t,e,n,i,r,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Wn,eventId:r};if(e instanceof ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Pr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${YA(t)}?${bi(a).slice(1)}`}function YA({config:t}){return t.emulator?Au(t,KA):`https://${t.authDomain}/${GA}`}/**
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
 */const Gu="webStorageSupport";class QA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ui,this._completeRedirectFn=Va}async _openPopup(e,n,i,r){var s;Gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=zu(e,n,i,Ms(),r);return qA(e,o,$s())}async _openRedirect(e,n,i,r){return await this._originValidation(e),P0(zu(e,n,i,Ms(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Gt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i}async initAndGetManager(e){const n=await VA(e),i=new um(e);return n.register("authEvent",r=>(N(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Gu];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N_()||Ou()||Ar()}}const JA=QA;class XA{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return an("unexpected MultiFactorSessionType")}}}class Ku extends XA{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Ku(e)}_finalizeEnroll(e,n,i){return E0(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return B0(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class _m{constructor(){}static assertion(e){return Ku._fromCredential(e)}}_m.FACTOR_ID="phone";var ZA="@firebase/auth",ek="0.18.2";/**
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
 */class tk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ik(t){Bn(new Ot("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{N(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),N(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x_(t)},l=new SR(o,a);return sR(l,n),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Bn(new Ot("auth-internal",e=>{const n=Qe(e.getProvider("auth").getImmediate());return(i=>new tk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(ZA,ek,nk(t))}ik("Browser");/**
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
 */function Bi(){return window}/**
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
 */const rk=2e3;async function sk(t,e,n){var i;const{BuildInfo:r}=Bi();Gt(e.sessionId,"AuthEvent did not contain a session ID");const s=await uk(e.sessionId),o={};return Ar()?o.ibi=r.packageName:Bs()?o.apn=r.packageName:et(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,zu(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function ok(t){const{BuildInfo:e}=Bi(),n={};Ar()?n.iosBundleId=e.packageName:Bs()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await fm(t,n)}function ak(t){const{cordova:e}=Bi();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,ER()?"_blank":"_system","location=yes"),n(r)})})}async function lk(t,e,n){const{cordova:i}=Bi();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=i.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(tt(t,"redirect-cancelled-by-user"))},rk))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Bs()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function ck(t){var e,n,i,r,s,o,a,l,c,u;const d=Bi();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(r=(i=d==null?void 0:d.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uk(t){const e=dk(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function dk(t){if(Gt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
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
 */const hk=20;class fk extends um{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function pk(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:mk(),postBody:null,tenantId:t.tenantId,error:tt(t,"no-auth-event")}}function gk(t,e){return Yu()._set(Qu(t),e)}async function mm(t){const e=await Yu()._get(Qu(t));return e&&await Yu()._remove(Qu(t)),e}function _k(t,e){var n,i;const r=yk(e);if(r.includes("/__/auth/callback")){const s=Wa(r),o=s.firebaseError?vk(decodeURIComponent(s.firebaseError)):null,a=(i=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],l=a?tt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function mk(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hk;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function Yu(){return St(Fu)}function Qu(t){return Li("authEvent",t.config.apiKey,t.name)}function vk(t){try{return JSON.parse(t)}catch(e){return null}}function yk(t){const e=Wa(t),n=e.link?decodeURIComponent(e.link):void 0,i=Wa(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wa(r).link||r||i||n||t}function Wa(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return ur(n.join("?"))}/**
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
 */const wk=500;class bk{constructor(){this._redirectPersistence=Ui,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Va}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new fk(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,r){ck(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),_A(),await this._originValidation(e);const o=pk(e,i,r);await gk(e,o);const a=await sk(e,o,n),l=await ak(a);return lk(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ok(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=Bi(),o=setTimeout(async()=>{await mm(e),n.onEvent(vm())},wk),a=async u=>{clearTimeout(o);const d=await mm(e);let h=null;d&&(u==null?void 0:u.url)&&(h=_k(d,u.url)),n.onEvent(h||vm())};typeof i!="undefined"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const l=r,c=`${s.packageName.toLowerCase()}://`;Bi().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(d){console.error(d)}}}}const Ek=bk;function vm(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:tt("no-auth-event")}}/**
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
 */function Ik(t,e){Qe(t)._logFramework(e)}var Ck="@firebase/auth-compat",Tk="0.1.5";/**
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
 */const Sk=1e3;function $a(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Rk(){return $a()==="http:"||$a()==="https:"}function ym(t=De()){return!!(($a()==="file:"||$a()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ak(){return xo()||Hf()}function kk(){return zf()&&(document==null?void 0:document.documentMode)===11}function Pk(t=De()){return/Edge\/\d+/.test(t)}function Ok(t=De()){return kk()||Pk(t)}function wm(){try{const t=self.localStorage,e=$s();if(t)return t.setItem(e,"1"),t.removeItem(e),Ok()?cc():!0}catch(t){return Ju()&&cc()}return!1}function Ju(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Xu(){return(Rk()||qf()||ym())&&!Ak()&&wm()&&!Ju()}function bm(){return ym()&&typeof document!="undefined"}async function Nk(){return bm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Sk);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Rt={LOCAL:"local",NONE:"none",SESSION:"session"},Hs=N,Em="persistence";function xk(t,e){if(Hs(Object.values(Rt).includes(e),t,"invalid-persistence-type"),xo()){Hs(e!==Rt.SESSION,t,"unsupported-persistence-type");return}if(Hf()){Hs(e===Rt.NONE,t,"unsupported-persistence-type");return}if(Ju()){Hs(e===Rt.NONE||e===Rt.LOCAL&&cc(),t,"unsupported-persistence-type");return}Hs(e===Rt.NONE||wm(),t,"unsupported-persistence-type")}async function Zu(t){await t._initializationPromise;const e=Im(),n=Li(Em,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function Mk(t,e){const n=Im();if(!(n==null?void 0:n.sessionStorage))return[];const i=Li(Em,t,e);switch(n.sessionStorage.getItem(i)){case Rt.NONE:return[Vs];case Rt.LOCAL:return[Da,Ui];case Rt.SESSION:return[Ui];default:return[]}}function Im(){return typeof window!="undefined"?window:null}/**
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
 */const Lk=N;class ti{constructor(){this.browserResolver=St(JA),this.cordovaResolver=St(Ek),this.underlyingResolver=null,this._redirectPersistence=Ui,this._completeRedirectFn=Va}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,r)}async _openRedirect(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return bm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Lk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Nk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Cm(t){return t.unwrap()}function Dk(t){return t.wrapped()}/**
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
 */function Fk(t){return Tm(t)}function Uk(t,e){var n;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const r=e;r.resolver=new Vk(t,w0(t,e))}else if(i){const r=Tm(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function Tm(t){const{_tokenResponse:e}=t instanceof It?t.customData:t;if(!e)return null;if(!(t instanceof It)&&"temporaryProof"in e&&"phoneNumber"in e)return Kt.credentialFromResult(t);const n=e.providerId;if(!n||n===xs.PASSWORD)return null;let i;switch(n){case xs.GOOGLE:i=un;break;case xs.FACEBOOK:i=cn;break;case xs.GITHUB:i=dn;break;case xs.TWITTER:i=hn;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!r&&!a?null:a?n.startsWith("saml.")?Sa._create(n,a):ln._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:s}):new Or(n).credential({idToken:r,accessToken:s,rawNonce:l})}return t instanceof It?i.credentialFromError(t):i.credentialFromResult(t)}function vt(t,e){return e.catch(n=>{throw n instanceof It&&Uk(t,n),n}).then(n=>{const i=n.operationType,r=n.user;return{operationType:i,credential:Fk(n),additionalUserInfo:y0(n),user:Sn.getOrCreate(r)}})}async function ed(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>vt(t,n.confirm(i))}}class Vk{constructor(e,n){this.resolver=n,this.auth=Dk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vt(Cm(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Sn{constructor(e){this._delegate=e,this.multiFactor=C0(e)}static getOrCreate(e){return Sn.USER_MAP.has(e)||Sn.USER_MAP.set(e,new Sn(e)),Sn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vt(this.auth,q_(this._delegate,e))}async linkWithPhoneNumber(e,n){return ed(this.auth,iA(this._delegate,e,n))}async linkWithPopup(e){return vt(this.auth,hA(this._delegate,e,ti))}async linkWithRedirect(e){return await Zu(Qe(this.auth)),bA(this._delegate,e,ti)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vt(this.auth,z_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ed(this.auth,rA(this._delegate,e,n))}reauthenticateWithPopup(e){return vt(this.auth,dA(this._delegate,e,ti))}async reauthenticateWithRedirect(e){return await Zu(Qe(this.auth)),yA(this._delegate,e,ti)}sendEmailVerification(e){return l0(this._delegate,e)}async unlink(e){return await KR(this._delegate,e),this}updateEmail(e){return h0(this._delegate,e)}updatePassword(e){return f0(this._delegate,e)}updatePhoneNumber(e){return sA(this._delegate,e)}updateProfile(e){return d0(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return c0(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Sn.USER_MAP=new WeakMap;/**
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
 */const qs=N;class td{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;qs(i,"invalid-api-key",{appName:e.name});let r=[Vs];if(typeof window!="undefined"){r=Mk(i,e.name);for(const o of[Da,Fu,Ui])r.includes(o)||r.push(o)}qs(i,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?ti:void 0;this._delegate=n.initialize({options:{persistence:r,popupRedirectResolver:s}}),this._delegate._updateErrorMap(iR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Sn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){RR(this._delegate,e,n)}applyActionCode(e){return ZR(this._delegate,e)}checkActionCode(e){return G_(this._delegate,e)}confirmPasswordReset(e,n){return XR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return vt(this._delegate,t0(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return a0(this._delegate,e)}isSignInWithEmailLink(e){return r0(this._delegate,e)}async getRedirectResult(){qs(Xu(),this._delegate,"operation-not-supported-in-this-environment");const e=await IA(this._delegate,ti);return e?vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ik(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:r,error:s,complete:o}=Sm(e,n,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,n,i){const{next:r,error:s,complete:o}=Sm(e,n,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,n){return i0(this._delegate,e,n)}sendPasswordResetEmail(e,n){return JR(this._delegate,e,n||void 0)}async setPersistence(e){xk(this._delegate,e);let n;switch(e){case Rt.SESSION:n=Ui;break;case Rt.LOCAL:n=await St(Da)._isAvailable()?Da:Fu;break;case Rt.NONE:n=Vs;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vt(this._delegate,GR(this._delegate))}signInWithCredential(e){return vt(this._delegate,ka(this._delegate,e))}signInWithCustomToken(e){return vt(this._delegate,QR(this._delegate,e))}signInWithEmailAndPassword(e,n){return vt(this._delegate,n0(this._delegate,e,n))}signInWithEmailLink(e,n){return vt(this._delegate,s0(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ed(this._delegate,nA(this._delegate,e,n))}async signInWithPopup(e){return qs(Xu(),this._delegate,"operation-not-supported-in-this-environment"),vt(this._delegate,uA(this._delegate,e,ti))}async signInWithRedirect(e){return qs(Xu(),this._delegate,"operation-not-supported-in-this-environment"),await Zu(this._delegate),mA(this._delegate,e,ti)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return e0(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}td.Persistence=Rt;function Sm(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const r=i;return{next:o=>r(o&&Sn.getOrCreate(o)),error:e,complete:n}}/**
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
 */class nd{constructor(){this.providerId="phone",this._delegate=new Kt(Cm(dr.auth()))}static credential(e,n){return Kt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}nd.PHONE_SIGN_IN_METHOD=Kt.PHONE_SIGN_IN_METHOD;nd.PROVIDER_ID=Kt.PROVIDER_ID;/**
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
 */const Bk=N;class Wk{constructor(e,n,i=dr.app()){var r;Bk((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new eA(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const $k="auth-compat";function jk(t){t.INTERNAL.registerComponent(new Ot($k,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new td(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Tr.EMAIL_SIGNIN,PASSWORD_RESET:Tr.PASSWORD_RESET,RECOVER_EMAIL:Tr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Tr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Tr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Tr.VERIFY_EMAIL}},EmailAuthProvider:Zn,FacebookAuthProvider:cn,GithubAuthProvider:dn,GoogleAuthProvider:un,OAuthProvider:Or,PhoneAuthProvider:nd,PhoneMultiFactorGenerator:_m,RecaptchaVerifier:Wk,TwitterAuthProvider:hn,Auth:td,AuthCredential:kr,Error:It}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Ck,Tk)}jk(dr);/**
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
 */var Wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wi||(Wi={}));/**
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
 */const Rm="firebasestorage.googleapis.com",Am="storageBucket",Hk=2*60*1e3,qk=10*60*1e3;class xe extends It{constructor(e,n){super(id(e),`Firebase Storage: ${n} (${id(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}_codeEquals(e){return id(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function id(t){return"storage/"+t}function rd(){const t="An unknown error occurred, please check the error payload for server response.";return new xe("unknown",t)}function zk(t){return new xe("object-not-found","Object '"+t+"' does not exist.")}function Gk(t){return new xe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Kk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe("unauthenticated",t)}function Yk(){return new xe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Qk(t){return new xe("unauthorized","User does not have permission to access '"+t+"'.")}function Jk(){return new xe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function km(){return new xe("canceled","User canceled the upload/download.")}function Xk(t){return new xe("invalid-url","Invalid URL '"+t+"'.")}function Zk(t){return new xe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function eP(){return new xe("no-default-bucket","No default bucket found. Did you set the '"+Am+"' property when initializing the app?")}function Pm(){return new xe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function tP(){return new xe("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function nP(){return new xe("no-download-url","The given file does not have any download URLs.")}function xr(t){return new xe("invalid-argument",t)}function Om(){return new xe("app-deleted","The Firebase app was deleted.")}function Nm(t){return new xe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new xe("invalid-format","String does not match format '"+t+"': "+e)}function ja(t){throw new xe("internal-error","Internal error: "+t)}/**
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
 */class iP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,r){if(this.sent_)throw ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw ja("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function rP(){return new iP}/**
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
 */class sP{createConnection(){return rP()}}/**
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
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=it.makeFromUrl(e,n)}catch(r){return new it(e,"")}if(i.path==="")return i;throw Zk(e)}static makeFromUrl(e,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function c(R){R.path_=decodeURIComponent(R.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${r}/o${h}`,"i"),_={bucket:1,path:3},C=n===Rm?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",y=new RegExp(`^https?://${C}/${r}/${w}`,"i"),k=[{regex:a,indices:l,postModify:s},{regex:p,indices:_,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let R=0;R<k.length;R++){const B=k[R],Y=B.regex.exec(e);if(Y){const j=Y[B.indices.bucket];let ee=Y[B.indices.path];ee||(ee=""),i=new it(j,ee),B.postModify(i);break}}if(i==null)throw Xk(e);return i}}class oP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aP(t,e,n){let i=1,r=null,s=!1,o=0;function a(){return o===2}let l=!1;function c(..._){l||(l=!0,e.apply(null,_))}function u(_){r=setTimeout(()=>{r=null,t(d,a())},_)}function d(_,...C){if(l)return;if(_){c.call(null,_,...C);return}if(a()||s){c.call(null,_,...C);return}i<64&&(i*=2);let y;o===1?(o=2,y=0):y=(i+Math.random())*1e3,u(y)}let h=!1;function p(_){h||(h=!0,!l&&(r!==null?(_||(o=2),clearTimeout(r),u(0)):_||(o=1)))}return u(0),setTimeout(()=>{s=!0,p(!0)},n),p}function lP(t){t(!1)}/**
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
 */function cP(t){return t!==void 0}function uP(t){return typeof t=="function"}function dP(t){return typeof t=="object"&&!Array.isArray(t)}function Ha(t){return typeof t=="string"||t instanceof String}function xm(t){return sd()&&t instanceof Blob}function sd(){return typeof Blob!="undefined"}function od(t,e,n,i){if(i<e)throw xr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw xr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ni(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Mm(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */class hP{constructor(e,n,i,r,s,o,a,l,c,u,d){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=a,this.errorCallback_=l,this.progressCallback_=u,this.timeout_=c,this.pool_=d,this.promise_=new Promise((h,p)=>{this.resolve_=h,this.reject_=p,this.start_()})}start_(){const e=this;function n(r,s){if(s){r(!1,new qa(!1,null,!0));return}const o=e.pool_.createConnection();e.pendingConnection_=o;function a(l){const c=l.loaded,u=l.lengthComputable?l.total:-1;e.progressCallback_!==null&&e.progressCallback_(c,u)}e.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{e.progressCallback_!==null&&o.removeUploadProgressListener(a),e.pendingConnection_=null;const l=o.getErrorCode()===Wi.NO_ERROR,c=o.getStatus();if(!l||e.isRetryStatusCode_(c)){const d=o.getErrorCode()===Wi.ABORT;r(!1,new qa(!1,null,d));return}const u=e.successCodes_.indexOf(c)!==-1;r(!0,new qa(u,o))})}function i(r,s){const o=e.resolve_,a=e.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=e.callback_(l,l.getResponseText());cP(c)?o(c):o()}catch(c){a(c)}else if(l!==null){const c=rd();c.serverResponse=l.getResponseText(),e.errorCallback_?a(e.errorCallback_(l,c)):a(c)}else if(s.canceled){const c=e.appDelete_?Om():km();a(c)}else{const c=Jk();a(c)}}this.canceled_?i(!1,new qa(!1,null,!0)):this.backoffId_=aP(n,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||r||s}}class qa{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function fP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function gP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function _P(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,i,r,s){const o=Mm(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return gP(l,e),fP(l,n),pP(l,s),_P(l,i),new hP(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}/**
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
 */function vP(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function yP(...t){const e=vP();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(sd())return new Blob(t);throw new xe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function wP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bP(t){return atob(t)}/**
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
 */const Ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ad{constructor(e,n){this.data=e,this.contentType=n||null}}function Lm(t,e){switch(t){case Ft.RAW:return new ad(Dm(e));case Ft.BASE64:case Ft.BASE64URL:return new ad(Fm(t,e));case Ft.DATA_URL:return new ad(IP(e),CP(e))}throw rd()}function Dm(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=t.charCodeAt(++n);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function EP(t){let e;try{e=decodeURIComponent(t)}catch(n){throw zs(Ft.DATA_URL,"Malformed data URL.")}return Dm(e)}function Fm(t,e){switch(t){case Ft.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw zs(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ft.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw zs(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bP(e)}catch(r){throw zs(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class Um{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(Ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=TP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new Um(t);return e.base64?Fm(Ft.BASE64,e.rest):EP(e.rest)}function CP(t){return new Um(t).contentType}function TP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Rn{constructor(e,n){let i=0,r="";xm(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(xm(this.data_)){const i=this.data_,r=wP(i,e,n);return r===null?null:new Rn(r)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Rn(i,!0)}}static getBlob(...e){if(sd()){const n=e.map(i=>i instanceof Rn?i.data_:i);return new Rn(yP.apply(null,n))}else{const n=e.map(o=>Ha(o)?Lm(Ft.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)r[s++]=o[a]}),new Rn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function ld(t){let e;try{e=JSON.parse(t)}catch(n){return null}return dP(e)?e:null}/**
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
 */function SP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RP(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Vm(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function AP(t,e){return e}class ut{constructor(e,n,i,r){this.server=e,this.local=n||e,this.writable=!!i,this.xform=r||AP}}let za=null;function kP(t){return!Ha(t)||t.length<2?t:Vm(t)}function Ga(){if(za)return za;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(s,o){return kP(o)}const n=new ut("name");n.xform=e,t.push(n);function i(s,o){return o!==void 0?Number(o):o}const r=new ut("size");return r.xform=i,t.push(r),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),za=t,za}function PP(t,e){function n(){const i=t.bucket,r=t.fullPath,s=new it(i,r);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function OP(t,e,n){const i={};i.type="file";const r=n.length;for(let s=0;s<r;s++){const o=n[s];i[o.local]=o.xform(i,e[o.server])}return PP(i,t),i}function Bm(t,e,n){const i=ld(e);return i===null?null:OP(t,i,n)}function NP(t,e,n,i){const r=ld(e);if(r===null||!Ha(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,h="/b/"+o(u)+"/o/"+o(d),p=ni(h,n,i),_=Mm({alt:"media",token:c});return p+_})[0]}function cd(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const Wm="prefixes",$m="items";function xP(t,e,n){const i={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Wm])for(const r of n[Wm]){const s=r.replace(/\/$/,""),o=t._makeStorageReference(new it(e,s));i.prefixes.push(o)}if(n[$m])for(const r of n[$m]){const s=t._makeStorageReference(new it(e,r.name));i.items.push(s)}return i}function MP(t,e,n){const i=ld(n);return i===null?null:xP(t,e,i)}class An{constructor(e,n,i,r){this.url=e,this.method=n,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function fn(t){if(!t)throw rd()}function Ka(t,e){function n(i,r){const s=Bm(t,r,e);return fn(s!==null),s}return n}function LP(t,e){function n(i,r){const s=MP(t,e,r);return fn(s!==null),s}return n}function DP(t,e){function n(i,r){const s=Bm(t,r,e);return fn(s!==null),NP(s,r,t.host,t._protocol)}return n}function Mr(t){function e(n,i){let r;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?r=Yk():r=Kk():n.getStatus()===402?r=Gk(t.bucket):n.getStatus()===403?r=Qk(t.path):r=i,r.serverResponse=i.serverResponse,r}return e}function Ya(t){const e=Mr(t);function n(i,r){let s=e(i,r);return i.getStatus()===404&&(s=zk(t.path)),s.serverResponse=r.serverResponse,s}return n}function jm(t,e,n){const i=e.fullServerUrl(),r=ni(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new An(r,s,Ka(t,n),o);return a.errorHandler=Ya(e),a}function FP(t,e,n,i,r){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),i&&(s.pageToken=i),r&&(s.maxResults=r);const o=e.bucketOnlyServerUrl(),a=ni(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new An(a,l,LP(t,e.bucket),c);return u.urlParams=s,u.errorHandler=Mr(e),u}function UP(t,e,n){const i=e.fullServerUrl(),r=ni(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new An(r,s,DP(t,n),o);return a.errorHandler=Ya(e),a}function VP(t,e,n,i){const r=e.fullServerUrl(),s=ni(r,t.host,t._protocol),o="PATCH",a=cd(n,i),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,u=new An(s,o,Ka(t,i),c);return u.headers=l,u.body=a,u.errorHandler=Ya(e),u}function BP(t,e){const n=e.fullServerUrl(),i=ni(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new An(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=Ya(e),a}function WP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Hm(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=WP(null,e)),i}function $P(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let R=0;R<2;R++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Hm(e,i,r),u=cd(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,h=`\r
--`+l+"--",p=Rn.getBlob(d,i,h);if(p===null)throw Pm();const _={name:c.fullPath},C=ni(s,t.host,t._protocol),w="POST",y=t.maxUploadRetryTime,E=new An(C,w,Ka(t,n),y);return E.urlParams=_,E.headers=o,E.body=p.uploadData(),E.errorHandler=Mr(e),E}class Qa{constructor(e,n,i,r){this.current=e,this.total=n,this.finalized=!!i,this.metadata=r||null}}function ud(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){fn(!1)}return fn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function jP(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=Hm(e,i,r),a={name:o.fullPath},l=ni(s,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=cd(o,n),h=t.maxUploadRetryTime;function p(C){ud(C);let w;try{w=C.getResponseHeader("X-Goog-Upload-URL")}catch(y){fn(!1)}return fn(Ha(w)),w}const _=new An(l,c,p,h);return _.urlParams=a,_.headers=u,_.body=d,_.errorHandler=Mr(e),_}function HP(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(c){const u=ud(c,["active","final"]);let d=null;try{d=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch(p){fn(!1)}d||fn(!1);const h=Number(d);return fn(!isNaN(h)),new Qa(h,i.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new An(n,o,s,a);return l.headers=r,l.errorHandler=Mr(e),l}const qm=256*1024;function qP(t,e,n,i,r,s,o,a){const l=new Qa(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=i.size()),i.size()!==l.total)throw tP();const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const d=l.current,h=d+u,_={"X-Goog-Upload-Command":u===c?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},C=i.slice(d,h);if(C===null)throw Pm();function w(R,B){const Y=ud(R,["active","final"]),j=l.current+u,ee=i.size();let $;return Y==="final"?$=Ka(e,s)(R,B):$=null,new Qa(j,ee,Y==="final",$)}const y="POST",E=e.maxUploadRetryTime,k=new An(n,y,w,E);return k.headers=_,k.body=C.uploadData(),k.progressCallback=a||null,k.errorHandler=Mr(t),k}/**
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
 */const zP={STATE_CHANGED:"state_changed"},dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function dd(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
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
 */class GP{constructor(e,n,i){if(uP(e)||n!=null||i!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=i!=null?i:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Lr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}/**
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
 */class zm{constructor(e,n,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=i,this._mappings=Ga(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{this._request=void 0,this._chunkMultiplier=1,r._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=r,this._transition("error"))},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals("canceled")?this.completeTransitions_():(this._error=r,this._transition("error"))},this._promise=new Promise((r,s)=>{this._resolve=r,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,i])=>{switch(this._state){case"running":e(n,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const i=jP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(i,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,i)=>{const r=HP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,n,i);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=qm*this._chunkMultiplier,n=new Qa(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((r,s)=>{let o;try{o=qP(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,r,s);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){qm*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const i=jm(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(i,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const i=$P(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(i,e,n);this._request=r,r.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=km(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=dd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,i,r){const s=new GP(n||void 0,i||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(dd(this._state)){case dt.SUCCESS:Lr(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;Lr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(dd(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&Lr(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&Lr(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&Lr(e.error.bind(e,this._error))();break;default:e.error&&Lr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class $i{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $i(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vm(this._location.path)}get storage(){return this._service}get parent(){const e=SP(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new $i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Nm(e)}}function KP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new zm(t,new Rn(e),n)}function YP(t){const e={prefixes:[],items:[]};return Gm(t,e).then(()=>e)}async function Gm(t,e,n){const r=await Km(t,{pageToken:n});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&await Gm(t,e,r.nextPageToken)}async function Km(t,e){e!=null&&typeof e.maxResults=="number"&&od("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=FP(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(i)).getPromise()}async function QP(t){t._throwIfRoot("getMetadata");const e=jm(t.storage,t._location,Ga());return(await t.storage.makeRequestWithTokens(e)).getPromise()}async function JP(t,e){t._throwIfRoot("updateMetadata");const n=VP(t.storage,t._location,e,Ga());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function XP(t){t._throwIfRoot("getDownloadURL");const e=UP(t.storage,t._location,Ga());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw nP();return n})}async function ZP(t){t._throwIfRoot("deleteObject");const e=BP(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function Ym(t,e){const n=RP(t._location.path,e),i=new it(t._location.bucket,n);return new $i(t.storage,i)}/**
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
 */function eO(t){return/^[A-Za-z]+:\/\//.test(t)}function tO(t,e){return new $i(t,e)}function Qm(t,e){if(t instanceof hd){const n=t;if(n._bucket==null)throw eP();const i=new $i(n,n._bucket);return e!=null?Qm(i,e):i}else return e!==void 0?Ym(t,e):t}function nO(t,e){if(e&&eO(e)){if(t instanceof hd)return tO(t,e);throw xr("To use ref(service, url), the first argument must be a Storage instance.")}else return Qm(t,e)}function Jm(t,e){const n=e==null?void 0:e[Am];return n==null?null:it.makeFromBucketSpec(n,t)}function iO(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:jf(r,t.app.options.projectId))}class hd{constructor(e,n,i,r,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._pool=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Rm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hk,this._maxUploadRetryTime=qk,this._requests=new Set,s!=null?this._bucket=it.makeFromBucketSpec(s,this._host):this._bucket=Jm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Jm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){od("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $i(this,e)}_makeRequest(e,n,i){if(this._deleted)return new oP(Om());{const r=mP(e,this._appId,n,i,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i)}}const rO="@firebase/storage",sO="0.8.3";/**
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
 */const oO="storage";function aO(t,e,n){return t=K(t),KP(t,e,n)}function lO(t){return t=K(t),QP(t)}function cO(t,e){return t=K(t),JP(t,e)}function uO(t,e){return t=K(t),Km(t,e)}function dO(t){return t=K(t),YP(t)}function hO(t){return t=K(t),XP(t)}function fO(t){return t=K(t),ZP(t)}function Xm(t,e){return t=K(t),nO(t,e)}function pO(t,e){return Ym(t,e)}function gO(t,e,n,i={}){iO(t,e,n,i)}function _O(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new hd(n,i,r,new sP,e,Wn)}function mO(){Bn(new Ot(oO,_O,"PUBLIC").setMultipleInstances(!0)),$n(rO,sO)}mO();/**
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
 */class Ja{constructor(e,n,i){this._delegate=e,this.task=n,this.ref=i}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class Zm{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ja(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(i=>{if(e)return e(new Ja(i,this,this._ref))},n)}on(e,n,i,r){let s;return n&&(typeof n=="function"?s=o=>n(new Ja(o,this,this._ref)):s={next:n.next?o=>n.next(new Ja(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,i||void 0,r||void 0)}}class ev{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new kn(e,this._service))}get items(){return this._delegate.items.map(e=>new kn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=pO(this._delegate,e);return new kn(n,this.storage)}get root(){return new kn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new kn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Zm(aO(this._delegate,e,n),this)}putString(e,n=Ft.RAW,i){this._throwIfRoot("putString");const r=Lm(n,e),s=Object.assign({},i);return s.contentType==null&&r.contentType!=null&&(s.contentType=r.contentType),new Zm(new zm(this._delegate,new Rn(r.data,!0),s),this)}listAll(){return dO(this._delegate).then(e=>new ev(e,this.storage))}list(e){return uO(this._delegate,e||void 0).then(n=>new ev(n,this.storage))}getMetadata(){return lO(this._delegate)}updateMetadata(e){return cO(this._delegate,e)}getDownloadURL(){return hO(this._delegate)}delete(){return this._throwIfRoot("delete"),fO(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw Nm(e)}}/**
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
 */class tv{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(nv(e))throw xr("ref() expected a child path but got a URL, use refFromURL instead.");return new kn(Xm(this._delegate,e),this)}refFromURL(e){if(!nv(e))throw xr("refFromURL() expected a full URL but got a child path, use ref() instead.");try{it.makeFromUrl(e,this._delegate.host)}catch(n){throw xr("refFromUrl() expected a valid full URL but got an invalid one.")}return new kn(Xm(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,i={}){gO(this._delegate,e,n,i)}}function nv(t){return/^[A-Za-z]+:\/\//.test(t)}const vO="@firebase/storage-compat",yO="0.1.3";/**
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
 */const wO="storage-compat";function bO(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:e});return new tv(n,i)}function EO(t){const e={TaskState:dt,TaskEvent:zP,StringFormat:Ft,Storage:tv,Reference:kn};t.INTERNAL.registerComponent(new Ot(wO,bO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(vO,yO)}EO(dr);/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const iv=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Dr=t=>iv?Symbol(t):"_vr_"+t,IO=Dr("rvlm"),rv=Dr("rvd"),fd=Dr("r"),sv=Dr("rl"),pd=Dr("rvl"),Fr=typeof window!="undefined";function CO(t){return t.__esModule||iv&&t[Symbol.toStringTag]==="Module"}const Ce=Object.assign;function gd(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const Gs=()=>{},TO=/\/$/,SO=t=>t.replace(TO,"");function _d(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=t(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=PO(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function RO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ov(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AO(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],n.matched[r])&&av(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function av(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kO(t[n],e[n]))return!1;return!0}function kO(t,e){return Array.isArray(t)?lv(t,e):Array.isArray(e)?lv(e,t):t===e}function lv(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function PO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Ks;(function(t){t.pop="pop",t.push="push"})(Ks||(Ks={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function OO(t){if(!t)if(Fr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SO(t)}const NO=/^[^#]+#/;function xO(t,e){return t.replace(NO,"#")+e}function MO(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Xa=()=>({left:window.pageXOffset,top:window.pageYOffset});function LO(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=MO(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function cv(t,e){return(history.state?history.state.position-e:-1)+t}const md=new Map;function DO(t,e){md.set(t,e)}function FO(t){const e=md.get(t);return md.delete(t),e}let UO=()=>location.protocol+"//"+location.host;function uv(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ov(l,"")}return ov(n,t)+i+r}function VO(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=uv(t,location),_=n.value,C=e.value;let w=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}w=C?h.position-C.position:0}else i(p);r.forEach(y=>{y(n.value,_,{delta:w,type:Ks.pop,direction:w?w>0?Ys.forward:Ys.back:Ys.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;!h.state||h.replaceState(Ce({},h.state,{scroll:Xa()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function dv(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Xa():null}}function BO(t){const{history:e,location:n}=window,i={value:uv(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:UO()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=Ce({},e.state,dv(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ce({},r.value,e.state,{forward:l,scroll:Xa()});s(u.current,u,!0);const d=Ce({},dv(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function WO(t){t=OO(t);const e=BO(t),n=VO(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Ce({location:"",base:t,go:i,createHref:xO.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ox(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),WO(t)}function $O(t){return typeof t=="string"||t&&typeof t=="object"}function hv(t){return typeof t=="string"||typeof t=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fv=Dr("nf");var pv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pv||(pv={}));function Vr(t,e){return Ce(new Error,{type:t,[fv]:!0},e)}function ji(t,e){return t instanceof Error&&fv in t&&(e==null||!!(t.type&e))}const gv="[^/]+?",jO={sensitive:!1,strict:!1,start:!0,end:!0},HO=/[.+*?^${}()[\]/\\]/g;function qO(t,e){const n=Ce({},jO,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(HO,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:C,optional:w,regexp:y}=h;s.push({name:_,repeatable:C,optional:w});const E=y||gv;if(E!==gv){p+=10;try{new RegExp(`(${E})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+R.message)}}let k=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(k=w&&c.length<2?`(?:/${k})`:"/"+k),w&&(k+="?"),r+=k,p+=20,w&&(p+=-8),C&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];d[_.name]=p&&_.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:C,optional:w}=p,y=_ in c?c[_]:"";if(Array.isArray(y)&&!C)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(y)?y.join("/"):y;if(!E)if(w)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=E}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function zO(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function GO(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=zO(i[n],r[n]);if(s)return s;n++}return r.length-i.length}const KO={type:0,value:""},YO=/[a-zA-Z0-9_]/;function QO(t){if(!t)return[[]];if(t==="/")return[[KO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:YO.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function JO(t,e,n){const i=qO(QO(t.path),n),r=Ce(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function XO(t,e){const n=[],i=new Map;e=mv({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const p=!h,_=eN(u);_.aliasOf=h&&h.record;const C=mv(e,u),w=[_];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of k)w.push(Ce({},_,{components:h?h.record.components:_.components,path:R,aliasOf:h?h.record:_}))}let y,E;for(const k of w){const{path:R}=k;if(d&&R[0]!=="/"){const B=d.record.path,Y=B[B.length-1]==="/"?"":"/";k.path=d.record.path+(R&&Y+R)}if(y=JO(k,d,C),h?h.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),p&&u.name&&!_v(y)&&o(u.name)),"children"in _){const B=_.children;for(let Y=0;Y<B.length;Y++)s(B[Y],y,h&&h.children[Y])}h=h||y,l(y)}return E?()=>{o(E)}:Gs}function o(u){if(hv(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&GO(u,n[d])>=0;)d++;n.splice(d,0,u),u.record.name&&!_v(u)&&i.set(u.record.name,u)}function c(u,d){let h,p={},_,C;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Vr(1,{location:u});C=h.record.name,p=Ce(ZO(d.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),_=h.stringify(p)}else if("path"in u)_=u.path,h=n.find(E=>E.re.test(_)),h&&(p=h.parse(_),C=h.record.name);else{if(h=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw Vr(1,{location:u,currentLocation:d});C=h.record.name,p=Ce({},d.params,u.params),_=h.stringify(p)}const w=[];let y=h;for(;y;)w.unshift(y.record),y=y.parent;return{name:C,path:_,params:p,matched:w,meta:nN(w)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ZO(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function eN(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function tN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function _v(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nN(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function mv(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const vv=/#/g,iN=/&/g,rN=/\//g,sN=/=/g,oN=/\?/g,yv=/\+/g,aN=/%5B/g,lN=/%5D/g,wv=/%5E/g,cN=/%60/g,bv=/%7B/g,uN=/%7C/g,Ev=/%7D/g,dN=/%20/g;function vd(t){return encodeURI(""+t).replace(uN,"|").replace(aN,"[").replace(lN,"]")}function hN(t){return vd(t).replace(bv,"{").replace(Ev,"}").replace(wv,"^")}function yd(t){return vd(t).replace(yv,"%2B").replace(dN,"+").replace(vv,"%23").replace(iN,"%26").replace(cN,"`").replace(bv,"{").replace(Ev,"}").replace(wv,"^")}function fN(t){return yd(t).replace(sN,"%3D")}function pN(t){return vd(t).replace(vv,"%23").replace(oN,"%3F")}function gN(t){return t==null?"":pN(t).replace(rN,"%2F")}function Za(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function _N(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yv," "),o=s.indexOf("="),a=Za(o<0?s:s.slice(0,o)),l=o<0?null:Za(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Iv(t){let e="";for(let n in t){const i=t[n];if(n=fN(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&yd(s)):[i&&yd(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function mN(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Qs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ri(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Vr(4,{from:n,to:e})):d instanceof Error?a(d):$O(d)?a(Vr(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function wd(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(vN(a)){const c=(a.__vccOpts||a)[e];c&&r.push(ri(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=CO(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ri(h,n,i,s,o)()}))}}return r}function vN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Cv(t){const e=Jt(fd),n=Jt(sv),i=ye(()=>e.resolve(z(t.to))),r=ye(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ur.bind(null,u));if(h>-1)return h;const p=Tv(l[c-2]);return c>1&&Tv(u)===p&&d[d.length-1].path!==p?d.findIndex(Ur.bind(null,l[c-2])):h}),s=ye(()=>r.value>-1&&EN(n.params,i.value.params)),o=ye(()=>r.value>-1&&r.value===n.matched.length-1&&av(n.params,i.value.params));function a(l={}){return bN(l)?e[z(t.replace)?"replace":"push"](z(t.to)).catch(Gs):Promise.resolve()}return{route:i,href:ye(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const yN=Xi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cv,setup(t,{slots:e}){const n=xn(Cv(t)),{options:i}=Jt(fd),r=ye(()=>({[Sv(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sv(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:_i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),wN=yN;function bN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EN(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Tv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sv=(t,e,n)=>t!=null?t:e!=null?e:n,IN=Xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Jt(pd),r=ye(()=>t.route||i.value),s=Jt(rv,0),o=ye(()=>r.value.matched[s]);Ji(rv,s+1),Ji(IO,o),Ji(pd,r);const a=Bt();return ht(()=>[a.value,o.value,t.name],([l,c,u],[d,h,p])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Ur(c,h)||!d)&&(c.enterCallbacks[u]||[]).forEach(_=>_(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Rv(n.default,{Component:u,route:l});const h=c.props[t.name],p=h?h===!0?l.params:typeof h=="function"?h(l):h:null,C=_i(u,Ce({},p,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Rv(n.default,{Component:C,route:l})||C}}});function Rv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const CN=IN;function Nx(t){const e=XO(t.routes,t),n=t.parseQuery||_N,i=t.stringifyQuery||Iv,r=t.history,s=Qs(),o=Qs(),a=Qs(),l=Oy(ii);let c=ii;Fr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gd.bind(null,I=>""+I),d=gd.bind(null,gN),h=gd.bind(null,Za);function p(I,H){let D,G;return hv(I)?(D=e.getRecordMatcher(I),G=H):G=I,e.addRoute(G,D)}function _(I){const H=e.getRecordMatcher(I);H&&e.removeRoute(H)}function C(){return e.getRoutes().map(I=>I.record)}function w(I){return!!e.getRecordMatcher(I)}function y(I,H){if(H=Ce({},H||l.value),typeof I=="string"){const L=_d(n,I,H.path),f=e.resolve({path:L.path},H),g=r.createHref(L.fullPath);return Ce(L,f,{params:h(f.params),hash:Za(L.hash),redirectedFrom:void 0,href:g})}let D;if("path"in I)D=Ce({},I,{path:_d(n,I.path,H.path).path});else{const L=Ce({},I.params);for(const f in L)L[f]==null&&delete L[f];D=Ce({},I,{params:d(I.params)}),H.params=d(H.params)}const G=e.resolve(D,H),v=I.hash||"";G.params=u(h(G.params));const S=RO(i,Ce({},I,{hash:hN(v),path:G.path})),F=r.createHref(S);return Ce({fullPath:S,hash:v,query:i===Iv?mN(I.query):I.query||{}},G,{redirectedFrom:void 0,href:F})}function E(I){return typeof I=="string"?_d(n,I,l.value.path):Ce({},I)}function k(I,H){if(c!==I)return Vr(8,{from:H,to:I})}function R(I){return j(I)}function B(I){return R(Ce(E(I),{replace:!0}))}function Y(I){const H=I.matched[I.matched.length-1];if(H&&H.redirect){const{redirect:D}=H;let G=typeof D=="function"?D(I):D;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=E(G):{path:G},G.params={}),Ce({query:I.query,hash:I.hash,params:I.params},G)}}function j(I,H){const D=c=y(I),G=l.value,v=I.state,S=I.force,F=I.replace===!0,L=Y(D);if(L)return j(Ce(E(L),{state:v,force:S,replace:F}),H||D);const f=D;f.redirectedFrom=H;let g;return!S&&AO(i,G,D)&&(g=Vr(16,{to:f,from:G}),ge(G,G,!0,!1)),(g?Promise.resolve(g):$(f,G)).catch(m=>ji(m)?m:le(m,f,G)).then(m=>{if(m){if(ji(m,2))return j(Ce(E(m.to),{state:v,force:S,replace:F}),H||f)}else m=ce(f,G,!0,F,v);return ie(f,G,m),m})}function ee(I,H){const D=k(I,H);return D?Promise.reject(D):Promise.resolve()}function $(I,H){let D;const[G,v,S]=TN(I,H);D=wd(G.reverse(),"beforeRouteLeave",I,H);for(const L of G)L.leaveGuards.forEach(f=>{D.push(ri(f,I,H))});const F=ee.bind(null,I,H);return D.push(F),Br(D).then(()=>{D=[];for(const L of s.list())D.push(ri(L,I,H));return D.push(F),Br(D)}).then(()=>{D=wd(v,"beforeRouteUpdate",I,H);for(const L of v)L.updateGuards.forEach(f=>{D.push(ri(f,I,H))});return D.push(F),Br(D)}).then(()=>{D=[];for(const L of I.matched)if(L.beforeEnter&&!H.matched.includes(L))if(Array.isArray(L.beforeEnter))for(const f of L.beforeEnter)D.push(ri(f,I,H));else D.push(ri(L.beforeEnter,I,H));return D.push(F),Br(D)}).then(()=>(I.matched.forEach(L=>L.enterCallbacks={}),D=wd(S,"beforeRouteEnter",I,H),D.push(F),Br(D))).then(()=>{D=[];for(const L of o.list())D.push(ri(L,I,H));return D.push(F),Br(D)}).catch(L=>ji(L,8)?L:Promise.reject(L))}function ie(I,H,D){for(const G of a.list())G(I,H,D)}function ce(I,H,D,G,v){const S=k(I,H);if(S)return S;const F=H===ii,L=Fr?history.state:{};D&&(G||F?r.replace(I.fullPath,Ce({scroll:F&&L&&L.scroll},v)):r.push(I.fullPath,v)),l.value=I,ge(I,H,D,F),U()}let W;function de(){W=r.listen((I,H,D)=>{const G=y(I),v=Y(G);if(v){j(Ce(v,{replace:!0}),G).catch(Gs);return}c=G;const S=l.value;Fr&&DO(cv(S.fullPath,D.delta),Xa()),$(G,S).catch(F=>ji(F,4|8)?F:ji(F,2)?(j(F.to,G).then(L=>{ji(L,4|16)&&!D.delta&&D.type===Ks.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(D.delta&&r.go(-D.delta,!1),le(F,G,S))).then(F=>{F=F||ce(G,S,!1),F&&(D.delta?r.go(-D.delta,!1):D.type===Ks.pop&&ji(F,4|16)&&r.go(-1,!1)),ie(G,S,F)}).catch(Gs)})}let ke=Qs(),nt=Qs(),he;function le(I,H,D){U(I);const G=nt.list();return G.length?G.forEach(v=>v(I,H,D)):console.error(I),Promise.reject(I)}function ue(){return he&&l.value!==ii?Promise.resolve():new Promise((I,H)=>{ke.add([I,H])})}function U(I){he||(he=!0,de(),ke.list().forEach(([H,D])=>I?D(I):H()),ke.reset())}function ge(I,H,D,G){const{scrollBehavior:v}=t;if(!Fr||!v)return Promise.resolve();const S=!D&&FO(cv(I.fullPath,0))||(G||!D)&&history.state&&history.state.scroll||null;return ir().then(()=>v(I,H,S)).then(F=>F&&LO(F)).catch(F=>le(F,I,H))}const Re=I=>r.go(I);let st;const Fe=new Set;return{currentRoute:l,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:C,resolve:y,options:t,push:R,replace:B,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:ue,install(I){const H=this;I.component("RouterLink",wN),I.component("RouterView",CN),I.config.globalProperties.$router=H,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>z(l)}),Fr&&!st&&l.value===ii&&(st=!0,R(r.location).catch(v=>{}));const D={};for(const v in ii)D[v]=ye(()=>l.value[v]);I.provide(fd,H),I.provide(sv,xn(D)),I.provide(pd,l);const G=I.unmount;Fe.add(I),I.unmount=function(){Fe.delete(I),Fe.size<1&&(c=ii,W&&W(),l.value=ii,st=!1,he=!1),G()}}}}function Br(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function TN(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ur(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ur(c,l))||r.push(l))}return[n,i,r]}/**
  * vee-validate v4.5.2
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function Hi(t){return typeof t=="function"}function el(t){return t==null}const Wr=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function Av(t){return Number(t)>=0}function SN(t){const e=parseFloat(t);return isNaN(e)?t:e}const kv={};function xx(t,e){AN(t,e),kv[t]=e}function RN(t){return kv[t]}function AN(t,e){if(!Hi(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const qi=Symbol("vee-validate-form"),kN=Symbol("vee-validate-field-instance"),tl=Symbol("Default empty value");function bd(t){return Hi(t)&&!!t.__locatorRef}function PN(t){return["input","textarea","select"].includes(t)}function ON(t,e){return PN(t)&&e.type==="file"}function Js(t){return!!t&&Hi(t.validate)}function Xs(t){return t==="checkbox"||t==="radio"}function NN(t){return Wr(t)||Array.isArray(t)}function xN(t){return Array.isArray(t)?t.length===0:Wr(t)&&Object.keys(t).length===0}function nl(t){return/^\[.+\]$/i.test(t)}function MN(t){return Pv(t)&&t.multiple}function Pv(t){return t.tagName==="SELECT"}function LN(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function DN(t,e){return LN(t,e)||ON(t,e)}function FN(t){return Ed(t)&&t.target&&"submit"in t.target}function Ed(t){return t?!!(typeof Event!="undefined"&&Hi(Event)&&t instanceof Event||t&&t.srcElement):!1}function Id(t,e){return e in t&&t[e]!==tl}function Cd(t){return nl(t)?t.replace(/\[|\]/gi,""):t}function Je(t,e,n){return t?nl(e)?t[Cd(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((r,s)=>NN(r)&&s in r?r[s]:n,t):n}function $r(t,e,n){if(nl(e)){t[Cd(e)]=n;return}const i=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<i.length;s++){if(s===i.length-1){r[i[s]]=n;return}(!(i[s]in r)||el(r[i[s]]))&&(r[i[s]]=Av(i[s+1])?[]:{}),r=r[i[s]]}}function Td(t,e){if(Array.isArray(t)&&Av(e)){t.splice(Number(e),1);return}Wr(t)&&delete t[e]}function Sd(t,e){if(nl(e)){delete t[Cd(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<n.length;s++){if(s===n.length-1){Td(i,n[s]);break}if(!(n[s]in i)||el(i[n[s]]))break;i=i[n[s]]}const r=n.map((s,o)=>Je(t,n.slice(0,o).join(".")));for(let s=r.length-1;s>=0;s--)if(!!xN(r[s])){if(s===0){Td(t,n[0]);continue}Td(r[s-1],n[s-1])}}function rt(t){return Object.keys(t)}function Zs(t,e=void 0){const n=Hh();return(n==null?void 0:n.provides[t])||Jt(t,e)}function Ov(t){Jh(`[vee-validate]: ${t}`)}function Rd(t,e,n){if(Array.isArray(t)){const i=[...t],r=i.indexOf(e);return r>=0?i.splice(r,1):i.push(e),i}return t===e?n:e}function UN(t,e=0){let n=null,i=[];return function(...r){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const s=t(...r);i.forEach(o=>o(s)),i=[]},e),new Promise(s=>i.push(s))}}const il=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var i,r;return(r=(i=e.slots).default)===null||r===void 0?void 0:r.call(i,n())}}:e.slots.default;function Ad(t){if(Nv(t))return t._value}function Nv(t){return"_value"in t}function kd(t){if(!Ed(t))return t;const e=t.target;if(Xs(e.type)&&Nv(e))return Ad(e);if(e.type==="file"&&e.files)return Array.from(e.files);if(MN(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Ad);if(Pv(e)){const n=Array.from(e.options).find(i=>i.selected);return n?Ad(n):e.value}return e.value}function xv(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Wr(t)&&t._$$isNormalized?t:Wr(t)?Object.keys(t).reduce((n,i)=>{const r=VN(t[i]);return t[i]!==!1&&(n[i]=Mv(r)),n},e):typeof t!="string"?e:t.split("|").reduce((n,i)=>{const r=BN(i);return r.name&&(n[r.name]=Mv(r.params)),n},e):e}function VN(t){return t===!0?[]:Array.isArray(t)||Wr(t)?t:[t]}function Mv(t){const e=n=>typeof n=="string"&&n[0]==="@"?WN(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,i)=>(n[i]=e(t[i]),n),{})}const BN=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function WN(t){const e=n=>Je(n,t)||n[t];return e.__locatorRef=t,e}function $N(t){return Array.isArray(t)?t.filter(bd):rt(t).filter(e=>bd(t[e])).map(e=>t[e])}const jN={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Pd=Object.assign({},jN);const Od=()=>Pd,HN=t=>{Pd=Object.assign(Object.assign({},Pd),t)},Mx=HN;async function Lv(t,e,n={}){const i=n==null?void 0:n.bails,r={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:i!=null?i:!0,formData:(n==null?void 0:n.values)||{}},o=(await qN(r,t)).errors;return{errors:o,valid:!o.length}}async function qN(t,e){if(Js(t.rules))return zN(e,t.rules,{bails:t.bails});if(Hi(t.rules)){const o={field:t.name,form:t.formData,value:e},a=await t.rules(e,o),l=typeof a!="string"&&a,c=typeof a=="string"?a:Dv(o);return{errors:l?[]:[c]}}const n=Object.assign(Object.assign({},t),{rules:xv(t.rules)}),i=[],r=Object.keys(n.rules),s=r.length;for(let o=0;o<s;o++){const a=r[o],l=await GN(n,e,{name:a,params:n.rules[a]});if(l.error&&(i.push(l.error),t.bails))return{errors:i}}return{errors:i}}async function zN(t,e,n){var i;return{errors:await e.validate(t,{abortEarly:(i=n.bails)!==null&&i!==void 0?i:!0}).then(()=>[]).catch(s=>{if(s.name==="ValidationError")return s.errors;throw s})}}async function GN(t,e,n){const i=RN(n.name);if(!i)throw new Error(`No such validator '${n.name}' exists.`);const r=KN(n.params,t.formData),s={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:r})},o=await i(e,r,s);return typeof o=="string"?{error:o}:{error:o?void 0:Dv(s)}}function Dv(t){const e=Od().generateMessage;return e?e(t):"Field is invalid"}function KN(t,e){const n=i=>bd(i)?i(e):i;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((i,r)=>(i[r]=n(t[r]),i),{})}async function YN(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(s=>{if(s.name!=="ValidationError")throw s;return s.inner||[]}),i={},r={};for(const s of n){const o=s.errors;i[s.path]={valid:!o.length,errors:o},o.length&&(r[s.path]=o[0])}return{valid:!n.length,results:i,errors:r}}async function QN(t,e,n){const r=rt(t).map(async c=>{var u,d,h;const p=await Lv(Je(e,c),t[c],{name:((u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c])||c,values:e,bails:(h=(d=n==null?void 0:n.bailsMap)===null||d===void 0?void 0:d[c])!==null&&h!==void 0?h:!0});return Object.assign(Object.assign({},p),{path:c})});let s=!0;const o=await Promise.all(r),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(s=!1,l[c.path]=c.errors[0]);return{valid:s,results:a,errors:l}}function Fv(t,e,n){typeof n.value=="object"&&(n.value=$e(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function $e(t){if(typeof t!="object")return t;var e=0,n,i,r,s=Object.prototype.toString.call(t);if(s==="[object Object]"?r=Object.create(t.__proto__||null):s==="[object Array]"?r=Array(t.length):s==="[object Set]"?(r=new Set,t.forEach(function(o){r.add($e(o))})):s==="[object Map]"?(r=new Map,t.forEach(function(o,a){r.set($e(a),$e(o))})):s==="[object Date]"?r=new Date(+t):s==="[object RegExp]"?r=new RegExp(t.source,t.flags):s==="[object DataView]"?r=new t.constructor($e(t.buffer)):s==="[object ArrayBuffer]"?r=t.slice(0):s.slice(-6)==="Array]"&&(r=new t.constructor(t)),r){for(i=Object.getOwnPropertySymbols(t);e<i.length;e++)Fv(r,i[e],Object.getOwnPropertyDescriptor(t,i[e]));for(e=0,i=Object.getOwnPropertyNames(t);e<i.length;e++)Object.hasOwnProperty.call(r,n=i[e])&&r[n]===t[n]||Fv(r,n,Object.getOwnPropertyDescriptor(t,n))}return r||t}var rl=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!=0;)if(!t(e[r],n[r]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;for(r of e.entries())if(!t(r[1],n.get(r[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(r of e.entries())if(!n.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!=0;)if(e[r]!==n[r])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!=0;){var o=s[r];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let Uv=0;function JN(t,e){const{value:n,initialValue:i,setInitialValue:r}=XN(t,e.modelValue,!e.standalone),{errorMessage:s,errors:o,setErrors:a}=ex(t,!e.standalone),l=ZN(n,i,o),c=Uv>=Number.MAX_SAFE_INTEGER?0:++Uv;function u(d){var h;"value"in d&&(n.value=d.value),"errors"in d&&a(d.errors),"touched"in d&&(l.touched=(h=d.touched)!==null&&h!==void 0?h:l.touched),"initialValue"in d&&r(d.initialValue)}return{id:c,path:t,value:n,initialValue:i,meta:l,errors:o,errorMessage:s,setState:u}}function XN(t,e,n){const i=n?Zs(qi,void 0):void 0,r=Bt(z(e));function s(){return i?Je(i.meta.value.initialValues,z(t),z(r)):z(r)}function o(u){if(!i){r.value=u;return}i.setFieldInitialValue(z(t),u)}const a=ye(s);if(!i)return{value:Bt(s()),initialValue:a,setInitialValue:o};const l=e?z(e):Je(i.values,z(t),z(a));return i.stageInitialValue(z(t),l),{value:ye({get(){return Je(i.values,z(t))},set(u){i.setFieldValue(z(t),u)}}),initialValue:a,setInitialValue:o}}function ZN(t,e,n){const i=xn({touched:!1,pending:!1,valid:!0,validated:!!z(n).length,initialValue:ye(()=>z(e)),dirty:ye(()=>!rl(z(t),z(e)))});return ht(n,r=>{i.valid=!r.length},{immediate:!0,flush:"sync"}),i}function ex(t,e){const n=e?Zs(qi,void 0):void 0;function i(s){return s?Array.isArray(s)?s:[s]:[]}if(!n){const s=Bt([]);return{errors:s,errorMessage:ye(()=>s.value[0]),setErrors:o=>{s.value=i(o)}}}const r=ye(()=>n.errorBag.value[z(t)]||[]);return{errors:r,errorMessage:ye(()=>r.value[0]),setErrors:s=>{n.setFieldErrorBag(z(t),i(s))}}}function tx(t,e,n){return Xs(n==null?void 0:n.type)?rx(t,e,n):Vv(t,e,n)}function Vv(t,e,n){const{initialValue:i,validateOnMount:r,bails:s,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,standalone:d}=nx(z(t),n),h=d?void 0:Zs(qi),{id:p,value:_,initialValue:C,meta:w,setState:y,errors:E,errorMessage:k}=JN(t,{modelValue:i,standalone:d}),R=()=>{w.touched=!0},B=ye(()=>{let U=z(e);const ge=z(h==null?void 0:h.schema);return ge&&!Js(ge)&&(U=ix(ge,z(t))||U),Js(U)||Hi(U)?U:xv(U)});async function Y(U){var ge,Re;return(h==null?void 0:h.validateSchema)?(ge=(await h.validateSchema(U)).results[z(t)])!==null&&ge!==void 0?ge:{valid:!0,errors:[]}:Lv(_.value,B.value,{name:z(l)||z(t),values:(Re=h==null?void 0:h.values)!==null&&Re!==void 0?Re:{},bails:s})}async function j(){w.pending=!0,w.validated=!0;const U=await Y("validated-only");return y({errors:U.errors}),w.pending=!1,U}async function ee(){const U=await Y("silent");return w.valid=U.valid,U}function $(U){return!(U==null?void 0:U.mode)||(U==null?void 0:U.mode)==="force"||(U==null?void 0:U.mode)==="validated-only"?j():ee()}const ie=(U,ge=!0)=>{const Re=kd(U);_.value=Re,!c&&ge&&j()};bo(()=>{if(r)return j();(!h||!h.validateSchema)&&ee()});function ce(U){w.touched=U}let W;function de(){W=ht(_,c?j:ee,{deep:!0})}de();function ke(U){var ge;W==null||W();const Re=U&&"value"in U?U.value:C.value;y({value:$e(Re),initialValue:$e(Re),touched:(ge=U==null?void 0:U.touched)!==null&&ge!==void 0?ge:!1,errors:(U==null?void 0:U.errors)||[]}),w.pending=!1,w.validated=!1,ee(),ir(()=>{de()})}function nt(U){_.value=U}function he(U){y({errors:Array.isArray(U)?U:[U]})}const le={id:p,name:t,label:l,value:_,meta:w,errors:E,errorMessage:k,type:o,checkedValue:a,uncheckedValue:u,bails:s,resetField:ke,handleReset:()=>ke(),validate:$,handleChange:ie,handleBlur:R,setState:y,setTouched:ce,setErrors:he,setValue:nt};if(Ji(kN,le),Le(e)&&typeof z(e)!="function"&&ht(e,(U,ge)=>{rl(U,ge)||(w.validated?j():ee())},{deep:!0}),!h)return le;h.register(le),Kr(()=>{h.unregister(le)});const ue=ye(()=>{const U=B.value;return!U||Hi(U)||Js(U)?{}:Object.keys(U).reduce((ge,Re)=>{const st=$N(U[Re]).map(Fe=>Fe.__locatorRef).reduce((Fe,pn)=>{const I=Je(h.values,pn)||h.values[pn];return I!==void 0&&(Fe[pn]=I),Fe},{});return Object.assign(ge,st),ge},{})});return ht(ue,(U,ge)=>{if(!Object.keys(U).length)return;!rl(U,ge)&&(w.validated?j():ee())}),le}function nx(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const i="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:i})}function ix(t,e){if(!!t)return t[e]}function rx(t,e,n){const i=(n==null?void 0:n.standalone)?void 0:Zs(qi),r=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=ye(()=>{const d=z(a.value),h=z(r);return Array.isArray(d)?d.includes(h):h===d});function u(d,h=!0){var p,_;if(c.value===((_=(p=d)===null||p===void 0?void 0:p.target)===null||_===void 0?void 0:_.checked))return;let C=kd(d);i||(C=Rd(z(a.value),z(r),z(s))),l(C,h)}return Kr(()=>{c.value&&u(z(r),!1)}),Object.assign(Object.assign({},a),{checked:c,checkedValue:r,uncheckedValue:s,handleChange:u})}return o(Vv(t,e,n))}const Lx=Xi({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Od().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:tl},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Mn(t,"rules"),i=Mn(t,"name"),r=Mn(t,"label"),s=Mn(t,"uncheckedValue"),o=Id(t,"onUpdate:modelValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:d,handleBlur:h,setTouched:p,resetField:_,handleReset:C,meta:w,checked:y,setErrors:E}=tx(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:ax(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:r,validateOnValueUpdate:!1}),k=o?function(ie,ce=!0){d(ie,ce),e.emit("update:modelValue",l.value)}:d,R=$=>{Xs(e.attrs.type)||(l.value=kd($))},B=o?function(ie){R(ie),e.emit("update:modelValue",l.value)}:R,Y=ye(()=>{const{validateOnInput:$,validateOnChange:ie,validateOnBlur:ce,validateOnModelUpdate:W}=sx(t),de=[h,e.attrs.onBlur,ce?u:void 0].filter(Boolean),ke=[ue=>k(ue,$),e.attrs.onInput].filter(Boolean),nt=[ue=>k(ue,ie),e.attrs.onChange].filter(Boolean),he={name:t.name,onBlur:de,onInput:ke,onChange:nt};W&&(he["onUpdate:modelValue"]=[k]),Xs(e.attrs.type)&&y?he.checked=y.value:he.value=l.value;const le=Bv(t,e);return DN(le,e.attrs)&&delete he.value,he}),j=Mn(t,"modelValue");ht(j,$=>{$===tl&&l.value===void 0||$!==ox(l.value,t.modelModifiers)&&(l.value=$===tl?void 0:$,u())});function ee(){return{field:Y.value,value:l.value,meta:w,errors:a.value,errorMessage:c.value,validate:u,resetField:_,handleChange:k,handleInput:B,handleReset:C,handleBlur:h,setTouched:p,setErrors:E}}return e.expose({setErrors:E,setTouched:p,reset:_,validate:u,handleChange:d}),()=>{const $=Fl(Bv(t,e)),ie=il($,e,ee);return $?_i($,Object.assign(Object.assign({},e.attrs),Y.value),ie):ie}}});function Bv(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function sx(t){var e,n,i,r;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=Od();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(i=t.validateOnBlur)!==null&&i!==void 0?i:a,validateOnModelUpdate:(r=t.validateOnModelUpdate)!==null&&r!==void 0?r:l}}function ox(t,e){return e.number?SN(t):t}function ax(t,e){return Xs(e.attrs.type)?Id(t,"modelValue")?t.modelValue:void 0:Id(t,"modelValue")?t.modelValue:e.attrs.value}let lx=0;function cx(t){const e=lx++,n=Bt({}),i=Bt(!1),r=Bt(0),s={},o=xn($e(z(t==null?void 0:t.initialValues)||{})),{errorBag:a,setErrorBag:l,setFieldErrorBag:c}=hx(t==null?void 0:t.initialErrors),u=ye(()=>rt(a.value).reduce((v,S)=>{const F=a.value[S];return F&&F.length&&(v[S]=F[0]),v},{}));function d(v){const S=n.value[v];return Array.isArray(S)?S[0]:S}function h(v){return!!n.value[v]}const p=ye(()=>rt(n.value).reduce((v,S)=>{const F=d(S);return F&&(v[S]=z(F.label||F.name)||""),v},{})),_=ye(()=>rt(n.value).reduce((v,S)=>{var F;const L=d(S);return L&&(v[S]=(F=L.bails)!==null&&F!==void 0?F:!0),v},{})),C=Object.assign({},(t==null?void 0:t.initialErrors)||{}),{initialValues:w,originalInitialValues:y,setInitialValues:E}=dx(n,o,t==null?void 0:t.initialValues),k=ux(n,o,w,u),R=t==null?void 0:t.validationSchema,B={formId:e,fieldsByPath:n,values:o,errorBag:a,errors:u,schema:R,submitCount:r,meta:k,isSubmitting:i,fieldArraysLookup:s,validateSchema:z(R)?D:void 0,validate:U,register:le,unregister:ue,setFieldErrorBag:c,validateField:ge,setFieldValue:ie,setValues:ce,setErrors:$,setFieldError:ee,setFieldTouched:W,setTouched:de,resetForm:ke,handleSubmit:Re,stageInitialValue:pn,unsetInitialValue:Fe,setFieldInitialValue:st};function Y(v){return Array.isArray(v)}function j(v,S){return Array.isArray(v)?v.forEach(S):S(v)}function ee(v,S){c(v,S)}function $(v){l(v)}function ie(v,S,{force:F}={force:!1}){var L;const f=n.value[v],g=$e(S);if(!f){$r(o,v,g);return}if(Y(f)&&((L=f[0])===null||L===void 0?void 0:L.type)==="checkbox"&&!Array.isArray(S)){const b=$e(Rd(Je(o,v)||[],S,void 0));$r(o,v,b);return}let m=S;!Y(f)&&f.type==="checkbox"&&!F&&(m=$e(Rd(Je(o,v),S,z(f.uncheckedValue)))),$r(o,v,m)}function ce(v){rt(o).forEach(S=>{delete o[S]}),rt(v).forEach(S=>{ie(S,v[S])}),Object.values(s).forEach(S=>S&&S.reset())}function W(v,S){const F=n.value[v];F&&j(F,L=>L.setTouched(S))}function de(v){rt(v).forEach(S=>{W(S,!!v[S])})}function ke(v){(v==null?void 0:v.values)?(E(v.values),ce(v==null?void 0:v.values)):(E(y.value),ce(y.value)),Object.values(n.value).forEach(S=>{!S||j(S,F=>F.resetField())}),(v==null?void 0:v.touched)&&de(v.touched),$((v==null?void 0:v.errors)||{}),r.value=(v==null?void 0:v.submitCount)||0}function nt(v,S){const F=Il(v),L=S;if(!n.value[L]){n.value[L]=F;return}const f=n.value[L];f&&!Array.isArray(f)&&(n.value[L]=[f]),n.value[L]=[...n.value[L],F]}function he(v,S){const F=S,L=n.value[F];if(!!L){if(!Y(L)&&v.id===L.id){delete n.value[F];return}if(Y(L)){const f=L.findIndex(g=>g.id===v.id);if(f===-1)return;if(L.splice(f,1),L.length===1){n.value[F]=L[0];return}L.length||delete n.value[F]}}}function le(v){const S=z(v.name);nt(v,S),Le(v.name)&&ht(v.name,async(L,f)=>{await ir(),he(v,f),nt(v,L),(u.value[f]||u.value[L])&&ge(L),await ir(),h(f)||Sd(o,f)});const F=z(v.errorMessage);F&&(C==null?void 0:C[S])!==F&&ge(S),delete C[S]}function ue(v){const S=z(v.name);he(v,S),ir(()=>{h(S)||(ee(S,void 0),Sd(o,S))})}async function U(v){if(B.validateSchema)return B.validateSchema((v==null?void 0:v.mode)||"force");const S=await Promise.all(Object.values(n.value).map(f=>{const g=Array.isArray(f)?f[0]:f;return g?g.validate(v).then(m=>({key:z(g.name),valid:m.valid,errors:m.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),F={},L={};for(const f of S)F[f.key]={valid:f.valid,errors:f.errors},f.errors.length&&(L[f.key]=f.errors[0]);return{valid:S.every(f=>f.valid),results:F,errors:L}}async function ge(v){const S=n.value[v];return S?Array.isArray(S)?S.map(F=>F.validate())[0]:S.validate():(Jh(`field with name ${v} was not found`),Promise.resolve({errors:[],valid:!0}))}function Re(v,S){return function(L){return L instanceof Event&&(L.preventDefault(),L.stopPropagation()),de(rt(n.value).reduce((f,g)=>(f[g]=!0,f),{})),i.value=!0,r.value++,U().then(f=>{if(f.valid&&typeof v=="function")return v($e(o),{evt:L,setErrors:$,setFieldError:ee,setTouched:de,setFieldTouched:W,setValues:ce,setFieldValue:ie,resetForm:ke});!f.valid&&typeof S=="function"&&S({values:$e(o),evt:L,errors:f.errors,results:f.results})}).then(f=>(i.value=!1,f),f=>{throw i.value=!1,f})}}function st(v,S){$r(w.value,v,$e(S))}function Fe(v){Sd(w.value,v)}function pn(v,S){$r(o,v,S),st(v,S)}async function I(){const v=z(R);return v?Js(v)?await YN(v,o):await QN(v,o,{names:p.value,bailsMap:_.value}):{valid:!0,results:{},errors:{}}}const H=UN(I,5);async function D(v){const S=await H(),F=B.fieldsByPath.value||{},L=rt(B.errorBag.value);return[...new Set([...rt(S.results),...rt(F),...L])].reduce((g,m)=>{const b=F[m],T=(S.results[m]||{errors:[]}).errors,x={errors:T,valid:!T.length};if(g.results[m]=x,x.valid||(g.errors[m]=x.errors[0]),!b)return ee(m,T),g;if(j(b,P=>P.meta.valid=x.valid),v==="silent")return g;const V=Array.isArray(b)?b.some(P=>P.meta.validated):b.meta.validated;return v==="validated-only"&&!V||j(b,P=>P.setState({errors:x.errors})),g},{valid:S.valid,results:{},errors:{}})}const G=Re((v,{evt:S})=>{FN(S)&&S.target.submit()});return bo(()=>{if((t==null?void 0:t.initialErrors)&&$(t.initialErrors),(t==null?void 0:t.initialTouched)&&de(t.initialTouched),t==null?void 0:t.validateOnMount){U();return}B.validateSchema&&B.validateSchema("silent")}),Le(R)&&ht(R,()=>{var v;(v=B.validateSchema)===null||v===void 0||v.call(B,"validated-only")}),Ji(qi,B),{errors:u,meta:k,values:o,isSubmitting:i,submitCount:r,validate:U,validateField:ge,handleReset:()=>ke(),resetForm:ke,handleSubmit:Re,submitForm:G,setFieldError:ee,setErrors:$,setFieldValue:ie,setValues:ce,setFieldTouched:W,setTouched:de}}function ux(t,e,n,i){const r={touched:"some",pending:"some",valid:"every"},s=ye(()=>!rl(e,z(n))),o=ye(()=>{const a=Object.values(t.value).flat(1).filter(Boolean);return rt(r).reduce((l,c)=>{const u=r[c];return l[c]=a[u](d=>d.meta[c]),l},{})});return ye(()=>Object.assign(Object.assign({initialValues:z(n)},o.value),{valid:o.value.valid&&!rt(i.value).length,dirty:s.value}))}function dx(t,e,n){const i=Bt($e(z(n))||{}),r=Bt($e(z(n))||{});function s(o,a=!1){i.value=$e(o),r.value=$e(o),!!a&&rt(t.value).forEach(l=>{const c=t.value[l],u=Array.isArray(c)?c.some(h=>h.meta.touched):c==null?void 0:c.meta.touched;if(!c||u)return;const d=Je(i.value,l);$r(e,l,$e(d))})}return Le(n)&&ht(n,o=>{s(o,!0)},{deep:!0}),{initialValues:i,originalInitialValues:r,setInitialValues:s}}function hx(t){const e=Bt({});function n(s){return Array.isArray(s)?s:s?[s]:[]}function i(s,o){if(!o){delete e.value[s];return}e.value[s]=n(o)}function r(s){e.value=rt(s).reduce((o,a)=>{const l=s[a];return l&&(o[a]=n(l)),o},{})}return t&&r(t),{errorBag:e,setErrorBag:r,setFieldErrorBag:i}}const Dx=Xi({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(t,e){const n=Mn(t,"initialValues"),i=Mn(t,"validationSchema"),{errors:r,values:s,meta:o,isSubmitting:a,submitCount:l,validate:c,validateField:u,handleReset:d,resetForm:h,handleSubmit:p,submitForm:_,setErrors:C,setFieldError:w,setFieldValue:y,setValues:E,setFieldTouched:k,setTouched:R}=cx({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),B=t.onSubmit?p(t.onSubmit,t.onInvalidSubmit):_;function Y($){Ed($)&&$.preventDefault(),d(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function j($,ie){return p(typeof $=="function"&&!ie?$:ie,t.onInvalidSubmit)($)}function ee(){return{meta:o.value,errors:r.value,values:s,isSubmitting:a.value,submitCount:l.value,validate:c,validateField:u,handleSubmit:j,handleReset:d,submitForm:_,setErrors:C,setFieldError:w,setFieldValue:y,setValues:E,setFieldTouched:k,setTouched:R,resetForm:h}}return e.expose({setFieldError:w,setErrors:C,setFieldValue:y,setValues:E,setFieldTouched:k,setTouched:R,resetForm:h,validate:c,validateField:u}),function(){const ie=t.as==="form"?t.as:Fl(t.as),ce=il(ie,e,ee);if(!t.as)return ce;const W=t.as==="form"?{novalidate:!0}:{};return _i(ie,Object.assign(Object.assign(Object.assign({},W),e.attrs),{onSubmit:B,onReset:Y}),ce)}}});let fx=0;function px(t){const e=fx++,n=Zs(qi,void 0),i=Bt([]),r=()=>{},s={fields:_o(i),remove:r,push:r,swap:r,insert:r,update:r,replace:r,prepend:r};if(!n)return Ov("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!z(t))return Ov("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;let o=0;function a(){const y=Je(n==null?void 0:n.values,z(t),[]);i.value=y.map(c),l()}a();function l(){const y=i.value.length;for(let E=0;E<y;E++){const k=i.value[E];k.isFirst=E===0,k.isLast=E===y-1}}function c(y){const E=o++;return{key:E,value:ye(()=>{const R=Je(n==null?void 0:n.values,z(t),[]),B=i.value.findIndex(Y=>Y.key===E);return B===-1?y:R[B]}),isFirst:!1,isLast:!1}}function u(y){const E=z(t),k=Je(n==null?void 0:n.values,E);if(!k||!Array.isArray(k))return;const R=[...k];R.splice(y,1),n==null||n.unsetInitialValue(E+`[${y}]`),n==null||n.setFieldValue(E,R),i.value.splice(y,1),l()}function d(y){const E=z(t),k=Je(n==null?void 0:n.values,E),R=el(k)?[]:k;if(!Array.isArray(R))return;const B=[...R];B.push(y),n==null||n.stageInitialValue(E+`[${B.length-1}]`,y),n==null||n.setFieldValue(E,B),i.value.push(c(y)),l()}function h(y,E){const k=z(t),R=Je(n==null?void 0:n.values,k);if(!Array.isArray(R)||!R[y]||!R[E])return;const B=[...R],Y=[...i.value],j=B[y];B[y]=B[E],B[E]=j;const ee=Y[y];Y[y]=Y[E],Y[E]=ee,n==null||n.setFieldValue(k,B),i.value=Y,l()}function p(y,E){const k=z(t),R=Je(n==null?void 0:n.values,k);if(!Array.isArray(R)||R.length<y)return;const B=[...R],Y=[...i.value];B.splice(y,0,E),Y.splice(y,0,c(E)),n==null||n.setFieldValue(k,B),i.value=Y,l()}function _(y){const E=z(t);n==null||n.setFieldValue(E,y),a()}function C(y,E){const k=z(t),R=Je(n==null?void 0:n.values,k);!Array.isArray(R)||R.length-1<y||n==null||n.setFieldValue(`${k}[${y}]`,E)}function w(y){const E=z(t),k=Je(n==null?void 0:n.values,E),R=el(k)?[]:k;if(!Array.isArray(R))return;const B=[y,...R];n==null||n.stageInitialValue(E+`[${B.length-1}]`,y),n==null||n.setFieldValue(E,B),i.value.unshift(c(y)),l()}return n.fieldArraysLookup[e]={reset:a},Kr(()=>{delete n.fieldArraysLookup[e]}),{fields:_o(i),remove:u,push:d,swap:h,insert:p,update:C,replace:_,prepend:w}}Xi({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:i,swap:r,insert:s,replace:o,update:a,prepend:l,fields:c}=px(Mn(t,"name"));function u(){return{fields:c.value,push:n,remove:i,swap:r,insert:s,update:a,replace:o,prepend:l}}return e.expose({push:n,remove:i,swap:r,insert:s,update:a,replace:o,prepend:l}),()=>il(void 0,e,u)}});const Fx=Xi({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Jt(qi,void 0),i=ye(()=>n==null?void 0:n.errors.value[t.name]);function r(){return{message:i.value}}return()=>{if(!i.value)return;const s=t.as?Fl(t.as):t.as,o=il(s,e,r),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o==null?void 0:o.length)?_i(s||"span",a,i.value):_i(s,a,o)}}});export{Dx as A,Lx as B,al as C,Fx as E,Zt as F,_f as T,jh as a,bt as b,bx as c,Ex as d,Iw as e,ww as f,Px as g,Ix as h,vx as i,Ax as j,yx as k,Tx as l,kx as m,dr as n,vw as o,mx as p,Nx as q,wx as r,Ox as s,_x as t,Mx as u,Cx as v,Fy as w,xx as x,Rx as y,Sx as z};
