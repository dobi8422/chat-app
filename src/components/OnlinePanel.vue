<template>
  <div class="panel">
    <div>
      <button @click="panelDown = !panelDown">
        <i class="fas fa-chevron-up" v-if="panelDown"></i>
        <i class="fas fa-chevron-down" v-if="!panelDown"></i>
      </button>
      <p class="title" v-if="panelDown"><i class="fas fa-signal"></i> 目前上線</p>
    </div>
    <div class="content" v-if="panelDown">
      <div>
        <img src="https://picsum.photos/id/500/200/200">
        <p>name</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    panelDown: false
  })
}
</script>

<style lang="scss" scoped>
.panel{
  width: 500px;
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 0;
  div{
    position: absolute;
    width: 500px;
    display: flex;
    button{
      background: $Z_main;
      color: $A_white;
      border: none;
      top: 0;
      margin: auto;
      margin-top: 0;
      border-radius: 0 0 5px 5px;
    }
    .title{
      margin: 0;
      padding-left: 1em;
      position: absolute;
    }
  }
  .content{
    display: flex;
    padding: 1.5em 1em 0 1em;
    background: $Z_main;
    z-index: -10;
    border-radius: 0 0 10px 10px;
    img{
      align-self: flex-start;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: .5em .3em;
    }
    p{
      font-size: 1.5em;
      margin: 20px;
      margin-left: 5px;
    }
  }
}
</style>
