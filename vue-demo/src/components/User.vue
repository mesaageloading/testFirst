<template>
  <div class="page">
    <div class="nav">
      <router-link  v-for="(item,index) in userData" :key="index" :to="'/user/'+item.id">{{item.username}}</router-link>
    </div>
    <div v-if="userInfo">
      用户名:{{userInfo.username}} <br>
      会员级别:{{userInfo.level}}
    </div>
  </div>
</template>

<script type="text/javascript">
let userData = [
  {
    id: '1',
    username: 'nodeing1',
    level: 'vip1'
  },
  {
    id: '2',
    username: 'nodeing2',
    level: 'vip1'
  },
  {
    id: '3',
    username: 'nodeing3',
    level: 'vip2'
  },
  {
    id: '4',
    username: 'nodeing4',
    level: 'vip3'
  }]
export default {
  data () {
    return {
      userData: userData
      // userInfo: null
    }
  },
  components: {
  },
  // beforeRouteUpdate (to, from, next) {
  //   // to.params 中装有路由带的id 用此id与数组userData比较，返回相应数据，反馈到页面
  //   console.log(to)
  //   this.userInfo = this.userData.filter((item) => item.id === to.params.id)[0]
  //   // console.log(this.userInfo)
  //   next()
  // },
  props: ['id'],
  computed: {
    // 将userInfo定义成为计算属性，使用props中的id
    userInfo () {
      console.log(this.id)
      return this.userData.filter((item) => item.id === this.id)[0]
    }
  }
  // beforeRouteUpdate (to, from, next) {
  //   // .beforeRouteUpdate,在当前路由改变，但是该组件被复用时调用,
  //   console.log(to, from)
  //   next()
  // }
}
</script>

<style scoped>
  .nav a{
    text-decoration:none;
    display:inline-block;
    padding:4px 20px;
  }
</style>
