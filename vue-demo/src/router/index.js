import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Vip from '@/components/Vip'
import Course from '@/components/Course'
import Question from '@/components/Question'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import HomeLeft from '@/components/HomeLeft'
import HomeRight from '@/components/HomeRight'
import User from '@/components/User'
import Login from '@/components/login'
import AxiosDemo from '@/components/axiosdemo/Demo1'
import GoodsDemo from '@/components/vuexDemo/GoodsDemo'

// 作为vue的插件
Vue.use(VueRouter)

// 创建实例 加入配置
const router = new VueRouter({
  // #/course 是 hash模式，  /course 为 history模式
  // 区别： hash模式是无刷新的，#/地址末尾加字符串，进行跳转
  // history模式会去请后台接口，通过几个方法back、forword、go等控制页面跳转
  mode: 'hash',
  linkActiveClass: 'actv',

  scrollBehavior (to, from, savedPosition) {
    // to是你即将进入的路由对象， from是从哪里来的， savedPosition往下走 保存滚动位置信息
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [{
    path: '/',
    components: {
      default: Home,
      left: HomeLeft,
      right: HomeRight
    },
    meta: {
      title: '首页'
    }
  },
  {
    path: '/vip',
    component: Vip,

    meta: {
      require: true,
      isLogin: false
    },
    children: [
      {
        path: 'one',
        component: One
      },
      {
        path: 'two',
        component: Two
      },
      {
        path: 'three',
        component: Three
      }
    ]
  },
  {
    path: '/course',
    alias: '/hi',
    component: Course
    // beforeEnter (to, from, next) {
    //   alert('进入之前执行了')
    //   next()
    // }
  },
  {
    path: '/question',
    name: 'wd',
    component: Question
  },
  {
    path: '/hello',

    // 路由重定向 第一种情况：后面直接加字符串
    // redirect: '/course'
    //  2、后面给一个对象
    // redirect: {name: 'wd'}
    //  3、后面给一个函数 ,to表示路由信息对象
    redirect: (to) => {
      console.log(to)
      if (to.hash) {
        return '/course'
      } else {
        return '/vip'
      }
    }
  },
  {
    path: '/user/:id?',
    component: User,
    // 只要开启props 属性id就会自动作为参数传到组件内部，再去组件内部定义一个props
    props: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/axios',
    component: AxiosDemo
  },
  {
    path: '/vuex',
    component: GoodsDemo
  }

  ]
})
// 挂在到进入路由之前执行
// router.beforeEach((to, from, next) => {
//   // console.log(to, '进入路由之前')
//   // to.path返回目标页面
//   // 进入路由之前判断是否登录
//   if (to.meta.require) {
//     if (to.meta.isLogin) {
//       next()
//     } else {
//       alert('请先登录！')
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

// 进入路由后执行
router.afterEach((to, from) => {
  // to是指即将进入的路由对象
  // from是指当前导航正要离开的路由
  // 需求： meta字段中有title时，自动设置网页标题为title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '龟龟'
  }
})
// 导出router
export default router
