<template>
  <div class="chat">
    <input class="chat_size" type="range" max="100" min="1" step="1" @change="chatResize" v-model="scale">
    <div class="chat_title">
      <div class="chat_name">&ensp; <i class="fas fa-tv"></i> {{ this.room }}</div>
      <router-link class="back_lobby" to="/choose_chat"><i class="fas fa-door-open"></i></router-link>
    </div>
    <div class="dialog_box">
      <div v-for="message in allMessages" :key="message.key" :class="(message.user !== userName ? 'msg' : 'msg-self')">
        <img :src="message.photoURL">
        <div>
          <div class="name">{{ message.user }}</div>
          <div class="text">{{ message.content }}</div>
        </div>
        <div class="information">
          <!-- <div>Read</div> -->
          <div>{{ message.time }}</div>
        </div>
      </div>
      <!-- <div class="separate">2021.10.11</div> -->
    </div>
    <div class="input_interface">
      <button @click="emoji"><i class="fas fa-grin"></i></button>
      <input type="text" @keyup.enter="SendMessage" v-model="message">
      <button @click="SendMessage"><i class="fas fa-share"></i></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    scale: '',
    message: ''
  }),
  methods: {
    chatResize () {
      const root = document.documentElement
      root.style.setProperty('--scale', `${this.scale / 100 * (document.body.clientWidth - 350) + 400}px`)
    },
    emoji () { // keycode: 91 + 190
      this.alertMessage('Emoji is not yet open')
    },
    SendMessage () {
      if (!this.message) { return true }
      this.sendMessage(this.message)
      this.message = ''
    },
    ...mapActions(['sendMessage', 'getMessages', 'alertMessage'])
  },
  computed: {
    ...mapGetters(['fullWidth', 'userName', 'room', 'allMessages'])
  },
  mounted () {
    this.getMessages()
    const root = document.documentElement
    root.style.setProperty('--scale', `${document.body.clientWidth > 800 ? 800 : document.body.clientWidth - 50}px`)
  }
}
</script>

<style lang="scss">
.chat{
  background: $Z_main;
  padding: 1em 0;
  border-radius: 5px;
  width: var(--scale);
  height: calc(100% - 100px);
  margin: 0;
  min-width: 35px0;
  .chat_title{
    display: flex;
    justify-content: space-between;
  }
  .chat_name{
    padding: 0 0 5px 0;
    font-size: 1.2em;
  }
  .back_lobby{
    padding: 0 1em 5px 0;
    font-size: 1.2em;
  }
  .dialog_box{
    height: calc(100% - 100px);
    overflow-y: scroll;
    background: $A_black;
    padding: .3em .5em 1em .5em;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    flex-flow: column;
    .separate{
      border-bottom: $Z_aid 1px dashed;
      border-top: $Z_aid 1px dashed;
      color: $Z_aid;
      width: 60%;
      margin: 1em auto;
      text-align: center;
      padding: 0.2em;
    }
    .msg{
      display: flex;
      flex-flow: row;
      align-items: center;
      margin-top: 10px;
      max-width: 70%;
      img{
        align-self: flex-start;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: .5em .3em;
      }
      .name{
        padding: 0 .5em .1em .5em;
      }
      .text{
        background: $Z_dim;
        border-radius: 10px;
        padding: .7em .7em .85em .7em;
        margin: 0 .5em;
      }
      .information{
        align-self: flex-end;
        padding-bottom: .5em;
      }
    }
    .msg-self{
      @extend .msg;
      flex-flow: row-reverse;
      text-align: end;
      align-self: flex-end;
      .text{
        background: $Z_aid;
        text-align: start;
      }
    }
  }
  .input_interface{
    background: $Z_main;
    height: 50px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    input{
      padding: 0.25em 0.7em;
      font-size: 1.1em;
      height: 35px;
      width: calc(100% - 100px);
      box-shadow: none;
    }
    button{
      border: none;
      background: none;
      color: $Z_dim;
      font-size: 1.5em;
      padding: 0.5em;
      :hover{
        color: $Z_aid;
      }
    }
  }
  .chat_size{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 120px;
    box-shadow: none;
    padding: 0;
    z-index: 5;
  }
}
</style>
