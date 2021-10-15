<template>
<div class="background">
  <transition name="modal">
    <div class="modal">
      <div class="wrap-0">
        <h5 class="title">Profile</h5>
        <button @click="closeModal"><i class="fas fa-times"></i></button>
      </div>
      <div class="wrap">
        <div class="wrap-1">
          <img :src=userProfile[0].photoURL alt="">
          <label v-if="userName === userProfile[0].user">
            <input type="file" @change="alertMessage('not yet open')">
            <span><i class="fas fa-edit"></i></span>
          </label>
        </div>
        <div class="wrap-2">
          <h5 class="title name">Name</h5>
          <p>{{ userProfile[0].user }}</p>
        </div>
      </div>
      <h5 class="title">Introduction</h5>
      <p>{{ userProfile[0].phoneNumber ? userProfile[0].phoneNumber : 'nothing' }}</p>
    </div>
  </transition>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    name: ''
  }),
  methods: {
    ...mapActions(['closeModal', 'alertMessage']) //, 'editProfile'
  },
  computed: {
    ...mapGetters(['userName', 'userProfile'])
  }
}
</script>

<style lang="scss">
.background{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(43, 43, 43, 0.5);
}
.modal{
  background: $Z_aid;
  width: 280px;
  padding: 1.5em;
  font-size: 1.2em;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-flow: column;
  .wrap-0{
    display: flex;
    justify-content: space-between;
    button{
      border-radius: 50%;
      background: none;
      color: $Z_dim;
    }
  }
  .title{
    margin: 0 0 .5em 0;
    color: $Z_dim;
  }
  p{
    margin: 0;
  }
  .wrap{
    display: flex;
    .wrap-1{
      margin-right: 2.5em;
      img{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin: 10px 0;
      }
      label{
        span{
          position: absolute;
          top: 150px;
          left: 115px;
          background: $Z_dim;
          border-radius: 50%;
          padding: .2em .2em .2em .3em;
        }
        input{
          display: none;
        }
      }
    }
    .name{
      padding-top: 1.2em;
    }
  }
}
</style>
