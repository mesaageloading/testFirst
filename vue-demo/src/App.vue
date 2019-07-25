<template>
  <div id="app">
    <div class="header">
<!--      <a href="#/">首页</a>-->
<!--      <a href="#/course">课程</a>-->
<!--      <a href="#/vip">会员</a>-->
<!--      <a href="#/question">问答</a>-->
<!--      1、router-link to后的地址会手动添加#,to属性可以绑定变量-->
<!--      2、默认渲染的是a标签。也可以自己设定-->
<!--      也可以绑定和事件样式-->
<!--      3、默认情况支持点击事件，设置样式在router-link上加active-class样式-->
<!--      4、绑定事件：event="事件名称"
          5、还可以加全局样式，在style中直接设置.activeClass{background-color:black
             注意：加全局样式时，需要在index.js中加入 linkActiveClass:'activeClass'优先级较低
          6、默认情况下是模糊匹配，加exact
-->
      <router-link :to="index" exact>首页</router-link>
      <router-link :to="course" >课程</router-link>
      <router-link to="/vip" >会员</router-link>
<!--      <router-link to="/question" active-class="actv">问答</router-link>-->
      <router-link :to="{name: 'wd'}" >问答</router-link>
      <router-link to="/user" >用户</router-link>

      <!--      <hr>-->
<!--      <router-link to="/vip" tag="div">vip</router-link>-->

    </div>
<!--    transition 过渡效果 需要配置类来实现 name-enter ,name-enter-to等-->
    <transition mode="out-in" name="fide">
      <router-view></router-view>
    </transition>
    <!--    渲染同级多组件-->
<!--    <div class="main">-->
<!--      <router-view name="left"></router-view>-->
<!--      <router-view name="right"></router-view>-->
<!--      <button @click="pushHtml">push</button>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      index: '/',
      course: '/course'
    }
  },
  methods: {
    pushHtml () {
      this.$router.push('/course')
    }
  },
  components: {
  },
  beforeRouteUpdate (to, from, next) {
    //
    next()
  }
}
</script>

<style>
  body {
    padding:0;
    margin:0;
}
  #app .header{
    background-color: black;
    text-align: center;
    height:80px;
    line-height: 80px;
  }
  #app .header a{
    color:white;
    /*//取消下划线*/
    text-decoration: none;
    /*padding:8px 20px;*/
    padding : 0 20px;
    display: inline-block;
  }
  #app .actv{
    background-color: red;
  }
  .fide-enter{
    opacity: 0;
    transform: translate(100%);
    /*transform: rotate3d(100,100,100,-180deg);*/

  }
  .fide-enter-to{
    opacity: 1;
    transform: translate(0);
    /*transform: rotate3d(0,0,0,0);*/

  }
  .fide-enter-active{
    transition: 1s;
  }
  .fide-leave{
    opacity: 1;
    transform: translate(0);

  }
  .fide-leave-to{
    opacity: 0;
    transform: translate(100%);
    /*transform: rotate3d(100,100,100,-180deg);*/
  }
  .fide-leave-active{
    transition: 1s;
  }
</style>
