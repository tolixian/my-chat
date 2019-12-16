import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentUser: '示例介绍',
    messagesToUser: {
      '示例介绍': {
        '示例介绍': [{textin: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。', textTime: new Date()},
          {textin: '项目地址: https://github.com/coffcer/vue-chat', textTime: new Date()}],
        'myMessage': []
      },
      'webpack': {
        'webpack': [],
        'myMessage': []
      }
    }
  },
  mutations: {
    selectUser (state, user) {
      state.currentUser = user
    },
    addMessage (state, message) {
      state.messagesToUser[state.currentUser]['myMessage'].push(message)
    }
  }
})
export default store
