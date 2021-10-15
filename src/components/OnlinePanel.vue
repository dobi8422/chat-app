<template>
  <div>
    <button @click="panelDown = !panelDown">
      <i class="fas fa-chevron-right" v-if="!panelDown"></i>
      <i class="fas fa-chevron-left" v-if="panelDown"></i>
    </button>
    <transition name="panel">
      <div class="content" v-if="panelDown">
        <p class="title" v-if="panelDown"><i class="fas fa-signal"></i> 目前上線</p>
        <div class="onlineUser" v-for="user in userState" :key="user.uid">
          <img v-if="user.online" :src="user.photoURL" @click="UserProfile(user.user)">
          <p v-if="user.online">{{ user.user }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    panelDown: false
  }),
  methods: {
    ...mapActions(['UserProfile'])
  },
  computed: {
    onlineUser () {
      return 'hi'
    },
    ...mapGetters(['userState'])
  }
}
</script>

<style lang="scss" scoped>
button{
  position: absolute;
  top: 20%;
  left: 0;
  background: $Z_main;
  color: $A_white;
  border: none;
  border-radius: 0 5px 5px 0;
  border: $A_black 1px solid;
  border-left: none;
  padding: 1em;
}
.content{
  position: absolute;
  top: calc(20% + 42px);
  left: 0;
  display: flex;
  padding: .5em .5em .5em 1em;
  flex-flow: column;
  background: $Z_main;
  border-radius: 0 10px 10px 0;
  width: 180px;
  height: 350px;
  border: $A_black 1px solid;
  border-left: none;
  .title{
    margin: 5px;
  }
  .onlineUser{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p{
      font-size: 1.5em;
      margin: .5em .4em;
    }
  }
}
.panel-enter-from, .panel-leave-to{
  opacity: 0;
  transform: translateX(-50px);
}
.panel-enter-active{
  transition: all 1s ease;
}
.panel-leave-active{
  transition: all .5s ease-in;
}
</style>
