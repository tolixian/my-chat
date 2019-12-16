<template>
  <div id="app">
    <div class="sidebar">
      <side></side>
    </div>
    <div class="main">
      <message></message>
      <textin></textin>
    </div>
  </div>
</template>

<script>
import Side from './components/Side'
import Message from './components/Message'
import Textin from './components/Textin'
export default {
  name: 'App',
  components: {
    Side,
    Message,
    Textin
  }
}
</script>

<style lang="less">
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .textin {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 160px)';
    }
}
body {
  color: #4d4d4d;
  font: 14px/1.4em 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial, sans-serif;
  background: #f5f5f5 url('../src/assets/images/bg.jpg') no-repeat center;
  background-size: cover;
  font-smoothing: antialiased;
}

</style>
