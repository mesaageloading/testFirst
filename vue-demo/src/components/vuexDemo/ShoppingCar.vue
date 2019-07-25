<template>
  <div class="page">
    <div class="goods">购物车一共有：<span>{{this.$store.getters.newCount}}</span> 件商品</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
  .goods{
    background-color: green;
    width: 250px;
    padding: 16px;
    color: white;
  }
  .goods span{
    color: red
  }
</style>
