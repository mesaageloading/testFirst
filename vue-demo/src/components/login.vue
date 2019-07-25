<template>
  <div class="page">
    用户名:<input type="text">
    密码:<input type="password">
    <button @click="loginClick">登录</button>
    <button>注册</button>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    loginClick () {
      console.log(this)
      this.isLogin = true
      console.log(this.isLogin)
      // let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
      // this.$router.push(NewPage)
      // this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
