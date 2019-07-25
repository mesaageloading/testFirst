import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 定义一个新模块
let newModules = {
  state: {
    goods_num: 5
  }
}
// 创建容器
let store = new Vuex.Store({
  state: {
    goods_num: 0,
    num2: 2,
    num3: 3,
    num4: 4,
    num6: 6
  },
  mutations: {
    // 用来处理添加购物车
    addShopping (state, payload) {
      // console.log(payload)
      // 注意 这里不能直接提交异步代码
      state.goods_num += payload
    }
  },
  actions: {
    changeCarAction (context, num) {
      setTimeout(() => {
        context.commit('addShopping', num)
      }, 1000)
    }
  },
  getters: {
    newCount (state) {
      return state.goods_num > 25 ? 25 : state.goods_num
    }
  },
  modules: {
    // 挂载到主模块
    a: newModules
  }
})

export default store
