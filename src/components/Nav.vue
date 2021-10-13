<template>
  <div>
    <div class="nav">
      <span @click="navDown = false"><i class="far fa-comment-dots fa-lg"></i> Chat App</span>
      <div v-if="!isCollapse">
        <router-link to="/login" @click="navDown = false"><i class="far fa-user-circle fa-lg"></i> Login</router-link>
        <router-link to="/register" @click="navDown = false"><i class="fas fa-user-plus"></i> Register</router-link>
      </div>
      <!-- 縮小nav -->
      <button class="collapse_button" v-else @click="navDown = !navDown">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <transition name="option">
      <div class="option" v-if="navDown">
        <router-link to="/login" @click="navDown = false">Login</router-link>
        <router-link to="/register" @click="navDown = false">Register</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({ navDown: false }),
  computed: {
    isCollapse () { return this.fullWidth < 768 },
    ...mapGetters(['fullWidth'])
  }
}
</script>

<style lang="scss">
.nav{
  position: fixed;
  right: 0;
  top: -1px;
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 20px);
  padding: 12px 10px 10px 10px;
  font-size: 20px;
  background: $Z_main;
  box-shadow: $Z_main 0 2px 2px;
  z-index: 20;
  a{
    margin-top: 2px;
  }
  a:last-child{
    border-left: $Z_dim 2px solid;
    padding-left: 1em;
  }
  div{
    a{
      margin: 10px;
      &.router-link-exact-active{
        color: $Z_dim;
      }
    }
  }
}
.collapse_button{
  position: absolute;
  right: 10px;
  top: 8px;
  font-size: 1em;
  background-color: $Z_main;
  color: $A_white;
  border: $A_white 2px solid;
  border-radius: 5px;
  padding: 3px 9px 1px 10px;
}
.option{
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  top: 45px;
  right: 0;
  width: 100%;
  font-size: 20px;
  background: $Z_main;
  box-shadow: $Z_main 0 2px 2px;
  z-index: 10;
  a{
    padding: 5px;
    &.router-link-exact-active{
      color: $Z_dim;
    }
  }
}
.option-enter-from, .option-leave-to{
  opacity: 0;
  transform: translateY(-50px);
}
.option-enter-active{
  transition: all 1s ease;
}
.option-leave-active{
  transition: all .5s ease-in;
}
</style>
