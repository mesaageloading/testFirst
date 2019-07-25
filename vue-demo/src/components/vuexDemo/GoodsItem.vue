<template>
  <div class="page">
    <li>
      <img src="http://edu.nodeing.com/files/course/2018/12-18/151439fad2be715092.jpg" alt="">
      <p class="title">html+css快速入门</p>
      <p><button @click="fnDown">-</button><input type="text" v-model="num"><button @click="fnUp">+</button></p>
      <button class="btn" @click="addShopping(num)">加入购物车</button>
    </li>
    <p>{{get_num}}|{{this.$store.state.a.goods_num}}</p>
<!--    <p>{{}}</p>-->
  </div>
</template>

<script type="text/ecmascript-6">
// import {mapState} from 'vuex'
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      num: 1,
      num99: 2
    }
  },
  components: {

  },
  methods: {
    fnDown () {
      if (this.num <= 1) {
        this.num = 1
      } else {
        this.num--
      }
    },
    fnUp () {
      this.num++
    },
    addNum () {
      // 如果开启严格模式，直接修改store下的state会报错
      // this.$store.state.goods_num += this.num
      // 向vux发送数据
      // this.$store.commit('addShopping', Number(this.num))
      // 向store发送多个数据，数据可用数组
      // this.$store.commit('addShopping', {
      //   n: Number(this.num),
      //   m: 20
      // })
      // action异步代码提交
      // this.$store.dispatch('changeCarAction', Number(this.num))
    },
    // mapMutations 使用
    // ...mapMutations({
    //   addShopping: 'addShopping'
    // })
    // mapAction 使用
    ...mapActions({
      addShopping: 'changeCarAction'
    })
  },
  computed: {
    // 使用辅助函数 简化代码，不用冗余使用this.$store.state.num1 ...
    // ...mapState(['num3', 'num4', 'num2']),
    // 如果值需要处理可以用如下方式
    // ...mapState({
    //   num3: state => state.num3 > 10 ? 10 : 20,
    //   num100: 'num4',
    //   num6 (state) {
    //     // 需要取data里面的num99和state里面的num6相加，这个时候需要用到this
    //     return this.num99 + state.num6
    //   }
    // })
    // 用法与mapState差不多
    // ...mapGetters(['newCount'])
    // 同理 也可以传入对象
    ...mapGetters({
      // 重命名 newCount
      get_num: 'newCount'
    })
  }
}
</script>

<style scoped>
  li{
    list-style: none;
  }
  li img{
    width: 280px;
  }
  li p{
    text-align: center;
  }
  .btn{
    background-color: red;
    width: 150px;
    color: white;
    padding: 8px;
    border-radius: 8px;
    display: block;
    margin: 8px auto;
  }
  li input{
    color: black;
  }
</style>
