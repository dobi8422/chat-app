<template>
  <div id="app">
    <Nav v-if="!userName"/>
    <Message/>
    <router-view/>
    <OnlinePanel v-if="userName"/>
    <Modal v-if="isModal"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Message from '@/components/Message.vue'
import OnlinePanel from '@/components/OnlinePanel.vue'
import Modal from '@/components/Modal.vue'
import { mapActions, mapGetters } from 'vuex'
import { auth } from '@/firebase.js'

export default {
  components: {
    Nav,
    Message,
    OnlinePanel,
    Modal
  },
  methods: {
    onresize () { this.resizeWidth(document.body.clientWidth) },
    ...mapActions(['resizeWidth', 'UserName', 'UserState'])
  },
  computed: {
    ...mapGetters(['userName', 'isModal'])
  },
  mounted () {
    window.onresize = () => { this.onresize() }
    auth.onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/login')
      } else {
        this.UserName(user.displayName)
        this.UserState()
        this.$router.push('/choose_chat')
      }
    })
  }
}
</script>

<style lang="scss">
body{
  font-family: Arial, Helvetica, sans-serif;
  background: $A_black;
  color: $A_white;
  padding: 0;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 47px);
  ::-webkit-scrollbar {
    width: 0.55em;
  }
  ::-webkit-scrollbar-track {
    background: rgb(66, 66, 66);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(94, 94, 94);
    border-radius: 20px;
  }
  a{
    color: $A_white;
    text-decoration: none;
  }
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
    height: 100%;
    // padding-top: 2em;
  }
}
input{
  border-radius: 5px;
  border: none;
  background: $A_black;
  color: $A_white;
  box-shadow: $A_black 0 0 2px;
  width: 90%;
  &:focus{
    outline: 0;
  }
}
.interface{
  width: 300px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: $Z_main;
  padding: 1.5em;
  border-radius: 10px;
  font-size: 1.2em;
  input{
    font-size: 1em;
    padding: .5em .7em;
  }
  p{
    align-self: flex-start;
    padding-left: 0.4em;
    margin-bottom: 5px;
  }
  span{
    align-self: flex-start;
    padding: 0.2em 0 0 0.4em;
    color: $Z_dim;
  }
  button{
    background: $Z_dim;
    color: $A_white;
    padding: 0.5em;
    border-radius: 5px;
    width: 100%;
    border: none;
    font-size: 0.9em;
    margin-top: 1.5em;
    box-shadow: $Z_dim 0 0 2px;
  }
}

</style>
