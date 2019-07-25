<template>
  <div class="page">
    <h1>Vip页面</h1>
    <div class="nav">
      <ul>
        <router-link tag="li" to="/vip/one">一级会员</router-link>
        <router-link tag="li" to="/vip/two">二级会员</router-link>
        <router-link tag="li" to="/vip/three">三级会员</router-link>
      </ul>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
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
.nav li{
  list-style: none;
  height:200px;
  width:200px;
  background-color: orange;
  color:white;
  float:left;
  margin:20px;
  line-height: 200px;
  text-align: center;
}
</style>
