import Vue from 'vue'
import App from './App.vue'

//导入需要被全局注册的组件
import Count from '@/components/Count.vue'
//参数一：字符串格式，表示组件的注册名称
//参数二表示被全局注册的那个组件
Vue.component('MyCount',Count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
