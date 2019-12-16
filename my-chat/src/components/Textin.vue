<template>
  <div class="textin">
   <textarea name="text" id="text" placeholder="按 ctrl + Enter 发送" v-model="textin" @keyup.ctrl.enter="submit"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Textin',
  data () {
    return {
      textin: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submit () {
      this.$store.commit({type: 'addMessage', textin: this.textin, textTime: new Date()})
      this.textin = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.textin {
    height: 160px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>
