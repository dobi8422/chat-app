<template>
  <div class="background">
    <div class="prompt">
      <div class="wrap">
        <h5 class="title">{{ privateDate.room }}</h5>
        <button @click="ISPROMPT(false)"><i class="fas fa-times"></i></button>
      </div>
      <div class="title"></div>
      <input type="text" :placeholder="privateDate.hint" @keyup.enter="check" v-model="inputPassword">
      <button class="check_button" @click="check"><i class="fas fa-check"></i></button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    inputPassword: ''
  }),
  methods: {
    check () {
      if (this.privateDate.password === this.inputPassword) {
        this.enterRoom(this.privateDate.room)
        this.alertMessage('Welcome')
      } else {
        this.alertMessage('Wrong password')
      }
    },
    ...mapMutations(['ISPROMPT']),
    ...mapActions(['enterRoom', 'alertMessage'])
  },
  computed: {
    ...mapGetters(['privateDate'])
  }
}
</script>

<style lang="scss">
.prompt{
  background: $Z_aid;
  width: 300px;
  padding: 1.5em;
  border-radius: 5px;
  font-size: 1.2em;
  .wrap{
    display: flex;
    justify-content: space-between;
    .title{
      margin: 0;
      padding-bottom: .5em;
      font-size: 1.2em;
    }
    button{
      border-radius: 50%;
      background: none;
      color: $Z_dim;
      width: 2.5em;
      height: 2.5em;
    }
  }
  input{
    font-size: 1em;
    max-width: 55%;
    padding: .3em .7em;
    text-align: center;
  }
  .check_button{
    border: none;
    // width: 200px;
    // padding: .2em;
    margin-left: .5em;
    border-radius: 50%;
    background: none;
    color: $A_white;
    font-size: 1.2em;
  }
}
</style>
