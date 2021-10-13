<template>
  <transition name="message">
    <div class="message" v-if="message">{{ message }}</div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default { computed: { ...mapGetters(['message']) } }
</script>

<style lang="scss">
.message{
  position: absolute;
  background: $Z_aid;
  padding: 1em;
  font-size: 1.2em;
  top: 60px;
  right: 50px;
  border-radius: 20px;
}
.message-enter-from, .message-leave-to{
  transform: translateX(200px);
}
.message-enter-active, .message-leave-active{
  transition: all 1s ease-in-out;
}
</style>
