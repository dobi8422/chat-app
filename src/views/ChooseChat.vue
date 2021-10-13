<template>
  <div class="choose_chat">
    <div class="choose_title">
      <div> {{ userName ? `Hello, ${userName}` : '' }}</div>
      <div @click="this.logout()"><i class="fas fa-sign-out-alt"></i> Logout</div>
    </div>
    <div class="input">
      <button><i class="fas fa-search"></i></button>
      <input type="text" placeholder="search chatroom" v-model="search">
    </div>
    <div class="input">
      <button @click="addNewChat"><i class="fas fa-plus"></i></button>
      <input type="text" placeholder="new chatroom" v-model="newRoom" @keyup.enter="addNewChat">
    </div>
    <p><i class="fas fa-tv"></i> 公共聊天室</p>
    <ol class="channel">
      <li @click="enterRoom(room.room)" v-for="room in filterAllRoom" :key="room">{{ room.room }}</li>
    </ol>
    <p><i class="fas fa-user-lock"></i> 私人聊天室</p>
    <ol class="channel">
      <li @click="enterPrivateRoom(room)" v-for="room in filterPrivateRoom" :key="room">{{ room.room }}</li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    newRoom: '',
    search: ''
  }),
  methods: {
    addNewChat () {
      this.newChat(this.newRoom)
      this.newRoom = ''
      this.getRoom()
    },
    enterPrivateRoom (room) {
      const needPassword = prompt('Please enter password', `${room.hint}`)
      if (needPassword === `${room.password}`) {
        this.enterRoom(room.room)
      } else {
        console.log('wrong password')
      }
    },
    ...mapActions(['enterRoom', 'logout', 'newChat', 'getRoom', 'getPrivateRoom'])
  },
  computed: {
    filterAllRoom () {
      if (!this.search) { return this.allRoom }
      const arr1 = this.allRoom.map(item => item.room)
      const arrs = this.search.split('')
      const arra = []
      arr1.filter(item => item.indexOf(arrs) !== -1).forEach(item => arra.push({ room: item }))
      return arra
    },
    filterPrivateRoom () {
      if (!this.search) { return this.privateRoom }
      const arr1 = this.privateRoom.map(item => item.room)
      const arrs = this.search.split('')
      const arra = []
      arr1.filter(item => item.indexOf(arrs) !== -1).forEach(item => arra.push({ room: item }))
      return arra
    },
    ...mapGetters(['userName', 'allRoom', 'privateRoom'])
  },
  mounted () {
    this.getRoom()
    this.getPrivateRoom()
  }
}
</script>

<style lang="scss">
.choose_chat{
  width: 300px;
  background: $Z_main;
  padding: 0.5em 1.5em;
  border-radius: 5px;
  height: 500px;
  font-size: 1.2em;
  .choose_title{
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  .input{
    display: flex;
    margin-bottom: 10px;
    background: $A_black;
    border-radius: 5px;
    button{
      background: $A_black;
      border-radius: 5px;
      color: $A_white;
      border: none;
      width: 40px;
      :hover{
        color: $Z_aid;
      }
    }
    input{
      box-shadow: none;
      padding: .5em 0;
      font-size: 1em;
    }
  }
  p{
    margin: 10px 0 5px 0;
    padding-left: .5em;
  }
  .channel{
    background: $A_black;
    padding: 0.5em 0 0 2em;
    border-radius: 5px;
    height: 130px;
    overflow-y: scroll;
    margin: 0;
  }
}
</style>
