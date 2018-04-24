import Vue from 'vue'
import Router from 'vue-router'
// Подключение websocket
// Был выбран из за простоты подключени. Так как небыло практики использоватения веб сокетов для vuejs
import VueNativeSock from 'vue-native-websocket'
// Венес каждый компонент на отдельную страницу
import Home from '@/page/home'
import Comments from '@/page/comments'
import Calculator from '@/page/calculator'

Vue.use(VueNativeSock, 'ws://echo.websocket.org')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: Home
    },
    {
      path: '/calculator',
      name: 'calculatorPage',
      component: Calculator
    },
    {
      path: '/comments',
      name: 'commentsPage',
      component: Comments
    }
  ]
})
