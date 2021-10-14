# 聊天室 (Vue3 + postman)
Demo:
https://dobi8422.github.io/chat-app/

登入畫面
![](https://i.postimg.cc/02LGZHbC/0.png)
![](https://i.postimg.cc/d0F2ckRk/2.png)
聊天室
![](https://i.postimg.cc/rp9SVVgh/3.png)
![](https://i.postimg.cc/FRW3STM3/4.png)
---
## 功能
* 註冊
* 登入(網站內, google, FB)
* 驗證(vee-validate 4)
* 大廳(聊天室: 選擇, 新增, 查詢，需要密碼的聊天室)
* 聊天室
  * 頭像, 名字, 輸入時間
  * 可調整視窗大小
* 顯示上線人數

---
## 新挑戰
1. 使用vite
2. postman測試API
3. 全域scss in vite (adjust vite.config.js)
4. vue animation - `<transition>`
5. 不使用bootstrap，RWD(chat)，drop-down menu(nav)，Modal(個人資料)
6. props, emit -> vuex is better (updated)
  * vuex的context包含{ rootState, dispatch, state, ......
7. Firebase in vite (import problem: version:9 -> route "compat")
8. input-range
9. firebase內建函式...set()...，將資料轉成`{屬性: {...}}`，不好利用 -> Object.values() or Object.keys() 轉成`[{...}]`，比較好用 (store/account.js vs. store/chat.js)

---
## 目前優化目標: modal, add photo, add intro, prompt
* prompt -> Modal

* modal -> 動畫
* 可替換照片 -> firebase storage
* 填寫個人介紹 -> input重疊p, temptext
* 新增貼圖 -> firebase storage

---
## 待優化
1. chat-app 2.0 (已讀, 註冊時間, 加入日期分隔線)
2. 改用 Firebase CLI ?
3. 記住密碼 -> 背景文字調色
4. emoji? -> 模擬鍵盤功能 -> (window + . ，內建表情)
