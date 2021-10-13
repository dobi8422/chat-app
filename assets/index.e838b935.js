var T=Object.defineProperty;var O=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,_=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&k(e,o,t[o]);if(O)for(var o of O(t))P.call(t,o)&&k(e,o,t[o]);return e};import{m as $,r as R,o as i,c as l,a as d,b as p,w as f,T as A,d as u,e as g,f as N,t as U,F as W,g as z,p as G,h as V,i as b,j,k as H,l as Z,n as B,q as y,s as q,u as F}from"./vendor.3928bf52.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};K();var M=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const X={data:()=>({navDown:!1}),computed:_({isCollapse(){return this.fullWidth<768}},$(["fullWidth"]))},J={class:"nav"},Q=d("i",{class:"far fa-comment-dots fa-lg"},null,-1),Y=g(" Chat App"),x=[Q,Y],ee={key:0},te=d("i",{class:"far fa-user-circle fa-lg"},null,-1),se=g(" Login"),oe=d("i",{class:"fas fa-user-plus"},null,-1),ne=g(" Register"),ae=d("i",{class:"fas fa-bars"},null,-1),re=[ae],ie={key:0,class:"option"},le=g("Login"),ce=g("Register");function ue(e,t,o,r,s,n){const a=R("router-link");return i(),l("div",null,[d("div",J,[d("span",{onClick:t[0]||(t[0]=c=>e.navDown=!1)},x),n.isCollapse?(i(),l("button",{key:1,class:"collapse_button",onClick:t[3]||(t[3]=c=>e.navDown=!e.navDown)},re)):(i(),l("div",ee,[p(a,{to:"/login",onClick:t[1]||(t[1]=c=>e.navDown=!1)},{default:f(()=>[te,se]),_:1}),p(a,{to:"/register",onClick:t[2]||(t[2]=c=>e.navDown=!1)},{default:f(()=>[oe,ne]),_:1})]))]),p(A,{name:"option"},{default:f(()=>[e.navDown?(i(),l("div",ie,[p(a,{to:"/login",onClick:t[4]||(t[4]=c=>e.navDown=!1)},{default:f(()=>[le]),_:1}),p(a,{to:"/register",onClick:t[5]||(t[5]=c=>e.navDown=!1)},{default:f(()=>[ce]),_:1})])):u("",!0)]),_:1})])}var de=M(X,[["render",ue]]);const pe={computed:_({},$(["message"]))},me={key:0,class:"message"};function he(e,t,o,r,s,n){return i(),N(A,{name:"message"},{default:f(()=>[e.message?(i(),l("div",me,U(e.message),1)):u("",!0)]),_:1})}var fe=M(pe,[["render",he]]);const _e={data:()=>({panelDown:!1}),computed:_({onlineUser(){return"hi"}},$(["userState"]))},ge=e=>(G("data-v-eea31990"),e=e(),V(),e),ve={key:0,class:"fas fa-chevron-right"},Re={key:1,class:"fas fa-chevron-left"},Ee={key:0,class:"content"},$e={key:0,class:"title"},ye=ge(()=>d("i",{class:"fas fa-signal"},null,-1)),Me=g(" \u76EE\u524D\u4E0A\u7DDA"),we=[ye,Me],Se=["src"],Ae={key:1};function Ne(e,t,o,r,s,n){return i(),l("div",null,[d("button",{onClick:t[0]||(t[0]=a=>e.panelDown=!e.panelDown)},[e.panelDown?u("",!0):(i(),l("i",ve)),e.panelDown?(i(),l("i",Re)):u("",!0)]),p(A,{name:"panel"},{default:f(()=>[e.panelDown?(i(),l("div",Ee,[e.panelDown?(i(),l("p",$e,we)):u("",!0),(i(!0),l(W,null,z(e.userState,a=>(i(),l("div",{class:"onlineUser",key:a.uid},[a.online?(i(),l("img",{key:0,src:a.photoURL},null,8,Se)):u("",!0),a.online?(i(),l("p",Ae,U(a.user),1)):u("",!0)]))),128))])):u("",!0)]),_:1})])}var Oe=M(_e,[["render",Ne],["__scopeId","data-v-eea31990"]]);const D={apiKey:"AIzaSyAVmhzkedl8VUk3Uw8-aC30zM4pXt2r_Xw",authDomain:"chat-app-29201.firebaseapp.com",databaseURL:"https://chat-app-29201-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-29201",storageBucket:"chat-app-29201.appspot.com",messagingSenderId:"840786297605",appId:"1:840786297605:web:4aea95163d2cff23e82d6c"},m=b.initializeApp(D).database(),h=b.initializeApp(D).auth();const ke={components:{Nav:de,Message:fe,OnlinePanel:Oe},methods:_({onresize(){this.resizeWidth(document.body.clientWidth)}},j(["resizeWidth","UserName","UserState"])),computed:_({},$(["userName"])),mounted(){window.onresize=()=>{this.onresize()},h.onAuthStateChanged(e=>{e?(this.UserName(e.displayName),this.UserState(),this.$router.push("/choose_chat")):this.$router.push("/login")})}},Ue={id:"app"};function be(e,t,o,r,s,n){const a=R("Nav"),c=R("Message"),v=R("OnlinePanel"),S=R("router-view");return i(),l("div",Ue,[e.userName?u("",!0):(i(),N(a,{key:0})),p(c),e.userName?(i(),N(v,{key:1})):u("",!0),p(S)])}var De=M(ke,[["render",be]]);const Ce="modulepreload",C={},Le="/chat-app/",w=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${Le}${r}`,r in C)return;C[r]=!0;const s=r.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":Ce,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((c,v)=>{a.addEventListener("load",c),a.addEventListener("error",v)})})).then(()=>t())},Te=[{path:"/:catchAll(.*)",redirect:"/choose_chat"},{path:"/login",name:"Login",component:()=>w(()=>import("./Login.54c3d84a.js"),["assets/Login.54c3d84a.js","assets/vendor.3928bf52.js"])},{path:"/register",name:"Register",component:()=>w(()=>import("./Register.cf79581e.js"),["assets/Register.cf79581e.js","assets/vendor.3928bf52.js"])},{path:"/choose_chat",name:"ChooseChat",component:()=>w(()=>import("./ChooseChat.75a35a22.js"),["assets/ChooseChat.75a35a22.js","assets/ChooseChat.cd4281af.css","assets/vendor.3928bf52.js"])},{path:"/chat/:chatId",name:"Chat",component:()=>w(()=>import("./Chat.cb7eae9b.js"),["assets/Chat.cb7eae9b.js","assets/Chat.e0b7dc5d.css","assets/vendor.3928bf52.js"])}],E=H({history:Z(),routes:Te});B({validateOnInput:!0});y("name",e=>!e||!e.length?"Please enter username":e.length<3||e.length>10?"Must between 3 ~ 10 character":!0);y("email",e=>!e||!e.length?"Please enter email":/^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(e)?!0:"Wrong email format");y("password",e=>!e||!e.length?"Please enter password":e.length<6||e.length>12?"Must between 6 ~ 12 character":!0);y("confirmed",(e,[t])=>e!==t?"Must be completely consistent":!0);var Ie={state:()=>({userName:"",userState:[]}),actions:{async checkAccount({dispatch:e},t){const{email:o,password:r}=t;let s;try{await h.signInWithEmailAndPassword(o,r).then(n=>{s=n.user.displayName}),e("alertMessage",`Welcom, ${s}`),e("UserName",s),E.push("/choose_chat")}catch{e("alertMessage",'"Wrong password" or "Email is not yet register"')}},async registerAccount({dispatch:e},t){const{name:o,email:r,password:s}=t,a=new Date().getMilliseconds();try{await h.createUserWithEmailAndPassword(r,s),await h.currentUser.updateProfile({displayName:o,photoURL:`https://picsum.photos/id/${a}/200/200`}),E.push("/login"),e("alertMessage",`Registration success\uFF1A${o}`)}catch{e("alertMessage","Registration failed")}},UserName({commit:e},t){e("USERNAME",t)},logout({dispatch:e}){h.signOut().then(()=>{e("alertMessage","Sign out"),e("UserName",""),E.push("/login")}).catch(e("alertMessage","Logout failed"))},UserState({commit:e}){const t=h.currentUser,{displayName:o,photoURL:r,uid:s}=t,n=m.ref(`userstate/${s}`);m.ref(".info/connected").on("value",c=>{if(c.val()){const v={user:o,online:!0,photoURL:r},S={user:o,online:!1,photoURL:r};n.onDisconnect().set(S).then(()=>{n.set(v)})}}),m.ref("userstate").on("value",c=>{e("USERSTATE",c.val())})}},mutations:{USERNAME(e,t){e.userName=t},USERSTATE(e,t){e.userState=t}},getters:{userName:e=>e.userName,userState:e=>e.userState}},Pe={state:()=>({room:"",allRoom:[],allMessages:[],privateRoom:[]}),actions:{newChat({dispatch:e},t){if(!t)return!0;if(!/^[a-zA-Z0-9_!?~\u4e00-\u9fa5]+$/.test(t))return e("alertMessage",'only "English alphabet", "Chinese character" or "_", "!", "?", "~"'),!0;const r=m.ref("chatroom"),s={room:t};r.push(s),e("alertMessage","Added successfully"),e("getRoom")},getRoom({commit:e}){const t=m.ref("chatroom"),o=[];t.on("value",r=>{const s=r.val();Object.keys(s).forEach(n=>{o.push({room:s[n].room})}),e("GETROOM",o)})},enterRoom({commit:e},t){E.push(`/chat/${t}`),e("GETMESSAGES",""),e("ENTERROOM",t)},sendMessage({rootState:e,dispatch:t,state:o},r){const s=new Date,n={user:e.accountModule.userName,content:r,time:`${s.getHours()<0?"0"+s.getHours():s.getHours()}:${s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes()}`,photoURL:h.currentUser.photoURL,day:s.getDate()};m.ref(`message_${o.room}`).push(n),t("getMessages",o.room)},getMessages({commit:e,state:t}){const o=m.ref(`message_${t.room}`),r=[];o.on("value",s=>{const n=s.val();Object.keys(n).forEach(a=>{r.push({user:n[a].user,content:n[a].content,time:n[a].time,photoURL:n[a].photoURL,day:n[a].day})}),e("GETMESSAGES",r)})},getPrivateRoom({commit:e}){const t=m.ref("privateroom"),o=[];t.on("value",r=>{const s=r.val();Object.keys(s).forEach(n=>{o.push({room:s[n].room,password:s[n].password,hint:s[n].hint})}),e("GETPRIVATEROOM",o)})}},mutations:{GETROOM(e,t){e.allRoom=t},ENTERROOM(e,t){e.room=t},GETMESSAGES(e,t){e.allMessages=t},GETPRIVATEROOM(e,t){e.privateRoom=t}},getters:{room:e=>e.room,allRoom:e=>e.allRoom,allMessages:e=>e.allMessages,privateRoom:e=>e.privateRoom}};const We=q({state:()=>({message:"",fullWidth:800}),actions:{alertMessage({commit:e},t){e("MESSAGE",t),setTimeout(()=>{e("MESSAGE","")},2e3)},resizeWidth({commit:e},t){e("RESIZEWIDTH",t)}},mutations:{MESSAGE(e,t){e.message=t},RESIZEWIDTH(e,t){e.fullWidth=t}},getters:{message:e=>e.message,fullWidth:e=>e.fullWidth},modules:{accountModule:Ie,chatModule:Pe}});let L;h.onAuthStateChanged(()=>{L||(L=F(De).use(We).use(E).mount("#app"))});export{M as _};
