var D=Object.defineProperty;var A=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))T.call(t,o)&&b(e,o,t[o]);if(A)for(var o of A(t))W.call(t,o)&&b(e,o,t[o]);return e};import{m as y,r as v,o as c,c as m,a as d,b as l,w as p,T as N,d as $,e as f,f as C,t as I,g as O,h as P,i as U,j as z,k as G,l as R,n as V,p as j}from"./vendor.26ccb61a.js";const H=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};H();var w=(e,t)=>{for(const[o,r]of t)e[o]=r;return e};const Z={data:()=>({navDown:!1}),computed:h({isCollapse(){return this.fullWidth<768}},y(["fullWidth"]))},B={class:"nav"},q=d("i",{class:"far fa-comment-dots fa-lg"},null,-1),K=f(" Chat App"),X=[q,K],F={key:0},J=d("i",{class:"far fa-user-circle fa-lg"},null,-1),Q=f(" Login"),Y=d("i",{class:"fas fa-user-plus"},null,-1),x=f(" Register"),ee=d("i",{class:"fas fa-bars"},null,-1),te=[ee],se={key:0,class:"option"},oe=f("Login"),ae=f("Register");function re(e,t,o,r,s,a){const n=v("router-link");return c(),m("div",null,[d("div",B,[d("span",{onClick:t[0]||(t[0]=i=>e.navDown=!1)},X),a.isCollapse?(c(),m("button",{key:1,class:"collapse_button",onClick:t[3]||(t[3]=i=>e.navDown=!e.navDown)},te)):(c(),m("div",F,[l(n,{to:"/login",onClick:t[1]||(t[1]=i=>e.navDown=!1)},{default:p(()=>[J,Q]),_:1}),l(n,{to:"/register",onClick:t[2]||(t[2]=i=>e.navDown=!1)},{default:p(()=>[Y,x]),_:1})]))]),l(N,{name:"option"},{default:p(()=>[e.navDown?(c(),m("div",se,[l(n,{to:"/login",onClick:t[4]||(t[4]=i=>e.navDown=!1)},{default:p(()=>[oe]),_:1}),l(n,{to:"/register",onClick:t[5]||(t[5]=i=>e.navDown=!1)},{default:p(()=>[ae]),_:1})])):$("",!0)]),_:1})])}var ne=w(Z,[["render",re]]);const ie={computed:h({},y(["message"]))},ce={key:0,class:"message"};function le(e,t,o,r,s,a){return c(),C(N,{name:"message"},{default:p(()=>[e.message?(c(),m("div",ce,I(e.message),1)):$("",!0)]),_:1})}var ue=w(ie,[["render",le]]);const S={apiKey:"AIzaSyAVmhzkedl8VUk3Uw8-aC30zM4pXt2r_Xw",authDomain:"chat-app-29201.firebaseapp.com",databaseURL:"https://chat-app-29201-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-29201",storageBucket:"chat-app-29201.appspot.com",messagingSenderId:"840786297605",appId:"1:840786297605:web:4aea95163d2cff23e82d6c"},g=O.initializeApp(S).database(),u=O.initializeApp(S).auth();const me={components:{Nav:ne,Message:ue},methods:h({onresize(){this.resizeWidth(document.body.clientWidth)}},P(["resizeWidth","UserName"])),computed:h({},y(["userName"])),mounted(){window.onresize=()=>{this.onresize()},u.onAuthStateChanged(e=>{e?(this.UserName(e.displayName),this.$router.push("/choose_chat")):this.$router.push("/login")})}},de={id:"app"};function pe(e,t,o,r,s,a){const n=v("Nav"),i=v("Message"),M=v("router-view");return c(),m("div",de,[e.userName?$("",!0):(c(),C(n,{key:0})),l(i),l(M)])}var he=w(me,[["render",pe]]);const fe="modulepreload",k={},ge="/chat-app/",E=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${ge}${r}`,r in k)return;k[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":fe,s||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),s)return new Promise((i,M)=>{n.addEventListener("load",i),n.addEventListener("error",M)})})).then(()=>t())},_e=[{path:"/:catchAll(.*)",redirect:"/choose_chat"},{path:"/login",name:"Login",component:()=>E(()=>import("./Login.c2bad4b6.js"),["assets/Login.c2bad4b6.js","assets/vendor.26ccb61a.js"])},{path:"/register",name:"Register",component:()=>E(()=>import("./Register.fb1c42be.js"),["assets/Register.fb1c42be.js","assets/vendor.26ccb61a.js"])},{path:"/choose_chat",name:"ChooseChat",component:()=>E(()=>import("./ChooseChat.93c93050.js"),["assets/ChooseChat.93c93050.js","assets/ChooseChat.cd4281af.css","assets/vendor.26ccb61a.js"])},{path:"/chat/:chatId",name:"Chat",component:()=>E(()=>import("./Chat.a142388e.js"),["assets/Chat.a142388e.js","assets/Chat.e0b7dc5d.css","assets/vendor.26ccb61a.js"])}],_=U({history:z(),routes:_e});G({validateOnInput:!0});R("name",e=>!e||!e.length?"Please enter username":e.length<3||e.length>14?"Must between 3 ~ 14 character":!0);R("email",e=>!e||!e.length?"Please enter email":/^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/.test(e)?!0:"Wrong email format");R("password",e=>!e||!e.length?"Please enter password":e.length<6||e.length>12?"Must between 6 ~ 12 character":!0);R("confirmed",(e,[t])=>e!==t?"Must be completely consistent":!0);var ve={state:()=>({userName:""}),actions:{async checkAccount(e,t){const{email:o,password:r}=t;let s;try{await u.signInWithEmailAndPassword(o,r).then(a=>{s=a.user.displayName}),e.dispatch("alertMessage",`Welcom, ${s}`),e.dispatch("UserName",s),_.push("/choose_chat")}catch{e.dispatch("alertMessage",'"Wrong password" or "Email is not yet register"')}},async registerAccount(e,t){const{name:o,email:r,password:s}=t,n=new Date().getMilliseconds();try{await u.createUserWithEmailAndPassword(r,s),await u.currentUser.updateProfile({displayName:o,photoURL:`https://picsum.photos/id/${n}/200/200`}),_.push("/login"),e.dispatch("alertMessage",`Registration success\uFF1A${o}`)}catch{e.dispatch("alertMessage","Registration failed")}},UserName(e,t){e.commit("USERNAME",t)},logout(e){u.signOut().then(()=>{e.dispatch("alertMessage","Sign out"),e.dispatch("UserName",""),_.push("/login")}).catch(e.dispatch("alertMessage","Logout failed"))}},mutations:{USERNAME(e,t){e.userName=t}},getters:{userName:e=>e.userName}},Re={state:()=>({room:"",allRoom:[],allMessages:[],privateRoom:[]}),actions:{newChat(e,t){if(!t)return!0;if(!/^[a-zA-Z0-9_!?~\u4e00-\u9fa5]+$/.test(t))return e.dispatch("alertMessage",'only "English alphabet", "Chinese character" or "_", "!", "?", "~"'),!0;const r=g.ref("chatroom"),s={room:t};r.push(s),e.dispatch("alertMessage","Added successfully"),e.dispatch("getRoom")},getRoom(e){const t=g.ref("chatroom"),o=[];t.on("value",r=>{const s=r.val();Object.keys(s).forEach(a=>{o.push({room:s[a].room})}),e.commit("GETROOM",o)})},enterRoom(e,t){_.push(`/chat/${t}`),e.commit("ENTERROOM",t)},sendMessage({rootState:e,dispatch:t,state:o},r){const s=new Date,a={user:e.accountModule.userName,content:r,time:`${s.getHours()<0?"0"+s.getHours():s.getHours()}:${s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes()}`,photoURL:u.currentUser.photoURL,day:s.getDate()};g.ref(`message_${o.room}`).push(a),t("getMessages",o.room)},getMessages({commit:e,state:t}){const o=g.ref(`message_${t.room}`),r=[];o.on("value",s=>{const a=s.val();Object.keys(a).forEach(n=>{r.push({user:a[n].user,content:a[n].content,time:a[n].time,photoURL:a[n].photoURL,day:a[n].day})}),e("GETMESSAGES",r)})},getPrivateRoom(e){const t=g.ref("privateroom"),o=[];t.on("value",r=>{const s=r.val();Object.keys(s).forEach(a=>{o.push({room:s[a].room,password:s[a].password,hint:s[a].hint})}),e.commit("GETPRIVATEROOM",o)})}},mutations:{GETROOM(e,t){e.allRoom=t},ENTERROOM(e,t){e.room=t},GETMESSAGES(e,t){e.allMessages=t},GETPRIVATEROOM(e,t){e.privateRoom=t}},getters:{room:e=>e.room,allRoom:e=>e.allRoom,allMessages:e=>e.allMessages,privateRoom:e=>e.privateRoom}};const Ee=V({state:()=>({message:"",fullWidth:800}),actions:{alertMessage(e,t){e.commit("MESSAGE",t),setTimeout(()=>{e.commit("MESSAGE","")},2e3)},resizeWidth(e,t){e.commit("RESIZEWIDTH",t)}},mutations:{MESSAGE(e,t){e.message=t},RESIZEWIDTH(e,t){e.fullWidth=t}},getters:{message:e=>e.message,fullWidth:e=>e.fullWidth},modules:{accountModule:ve,chatModule:Re}});let L;u.onAuthStateChanged(()=>{L||(L=j(he).use(Ee).use(_).mount("#app"))});export{w as _};
