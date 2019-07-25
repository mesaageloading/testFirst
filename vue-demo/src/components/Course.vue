<template>
  <div class="page">
    <h1>我是课程页面</h1>
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
  beforeRouteEnter (to, from, next) {
    alert('进入之前调用')
    // 注意：在这里不能拿到this 因为在加载前，组件还未加载出来
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('user组件中的beforeRouteLeave执行了')
    next()
  }
}
</script>

<style scoped>
</style>
