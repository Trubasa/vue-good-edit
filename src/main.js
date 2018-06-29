import Vue from 'vue'
import App from './App.vue'
import goodEdit from './lib/index'


import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(goodEdit);
Vue.use(elementUI)

window.appVue=new Vue({
  el: '#app',
  render: h => h(App)
})
window.appVue=window.appVue.$children[0];
