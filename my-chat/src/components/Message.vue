<template>
  <div class="message" ref="chatContainer">
    <ul v-if="reply" >
      <li v-for="message in reply" :key="message.textin">
        <div class="time">{{getTime(message.textTime)}}</div>
        <div class="messageItem">
          <div class="text">{{message.textin}}</div>
          <img class= "avatar" v-bind:src="userAvatar">
        </div>
      </li>
    </ul>
    <ul v-if="myMessages" class="myMessage">
      <li v-for="message in myMessages" :key="message.textin">
        <p class="time">{{getTime(message.textTime)}}</p>
        <div class="messageItem">
          <div class="text">{{message.textin}}</div>
          <img class= "avatar" src="../assets/images/1.jpg">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Message',
  data () {
    return {
      chatlog: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getTime (myDate) {
      var hours = myDate.getHours()
      var minites = myDate.getMinutes()
      if (minites < 10) {
        minites = '0' + minites
      }
      return (`${hours}:${minites}`)
    }
  },
  computed: {
    ...mapState({
      userAvatar: state => {
        if (state.currentUser === '示例介绍') {
          return (require('../assets/images/2.png'))
        } else {
          return (require('../assets/images/3.jpg'))
        }
      },
      reply: state => state.messagesToUser[state.currentUser][state.currentUser],
      myMessages (state) {
        this.chatlog = state.messagesToUser[state.currentUser]['myMessage']
        return state.messagesToUser[state.currentUser]['myMessage']
      }
    })
  },
  watch: {
    chatlog () {
      this.$nextTick(() => {
        var container = this.$refs.chatContainer
        console.log(container)
        container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.message {
    padding: 10px 15px;
    overflow-y: scroll;
    li {
        margin-bottom: 15px;
    }
    .avatar {
      width: 30px;
      height: 30px;
        float: left;
        margin: 0 10px 0 0;
        border-radius: 3px;
    }
    .text {
        display: inline-block;
        position: relative;
        padding: 0 10px;
        max-width: ~'calc(100% - 40px)';
        min-height: 30px;
        line-height: 2.5;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #fafafa;
        border-radius: 4px;

        &:before {
            content: " ";
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: #fafafa;
        }
    }

    .myMessage {
        text-align: right;

        .avatar {
            float: right;
            margin: 0 0 0 10px;
        }
        .text {
            background-color: #b2e281;

            &:before {
                right: inherit;
                left: 100%;
                border-right-color: transparent;
                border-left-color: #b2e281;
            }
        }
    }
        .time {
      margin: 7px 0;
      display: inline-block;
            text-align: center;
      padding: 0 18px;
      font-size: 12px;
      color: #fff;
      border-radius: 2px;
      background-color: #dcdcdc;
    }
}
</style>
