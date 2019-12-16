<template>
  <div class="side">
    <div class="header">
      <img src="../assets/images/1.jpg" class="photo">
      <span>coffee</span>
    </div>
    <div class="searchBar">
      <input class="search" type="text" placeholder="search user..." v-model="searchUser">
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item.name" @click="selectUser(item.name)">
          <img class="avatar" v-bind:src="item.avatar">
          <span class="name">{{item.name}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Side',
  data () {
    return {
      searchUser: '',
      userList: [
        {name: '示例介绍', avatar: require('../assets/images/2.png')},
        {name: 'webpack', avatar: require('../assets/images/3.jpg')}
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    selectUser (index) {
      this.$store.commit('selectUser', index)
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.currentUser
    },
    list () {
      var searchItem = []
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].name.search(this.searchUser) !== -1) {
          searchItem.push(this.userList[i])
        }
      }
      return (searchItem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.side {
        height: 100%;
    }
.side {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
}
.header {
  padding: 12px;
  border-bottom: solid 1px #24272C;
}
.searchBar{
  padding: 12px;
  border-bottom: solid 1px #24272C;
  margin-top: 10px;
}
.search {
    padding: 0 10px;
    width: 100%;
    font-size: 12px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    border: solid 1px #3a3a3a;
    border-radius: 4px;
    outline: none;
    background-color: #26292E;
}
.photo{
  width:40px;
  height:40px;
}
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;
        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
        width:30px;
        height: 30px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
</style>
